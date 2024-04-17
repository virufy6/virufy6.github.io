
import CardHome from "../../molecules/CardHome/CardHome";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useEffect, useState } from "react";
import { useI18n } from "~/i18n";

export default function CardSlider() {

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    breakpoints: {
      "(min-width: 1024px)": {
        slides: { perView: 2, spacing: 5 },
      },
    },
    slides: { perView: 1 },
  })
  const {home: {cardsTestimonials}}= useI18n()

  useEffect(() => {
    setLoading(true);
    fetch('/api/testimonials')
      .then((res) => res.json())
      .then((data) => {
        setData(data.docs);
        setLoading(false);
        
      }).catch((e) => console.log(e))
  }, []);

  useEffect(() => {
    instanceRef?.current?.update();
    //console.log("Response API: ", data);
  }, [data])

  return (
    <>
      <div className="navigation-wrapper mt-0 h-80 max-w-[1300px] w-[100vw]">
        <div ref={sliderRef} className="keen-slider h-72 ">

        {/* {isLoading ? <p className="text-center text-2xl">Loading...</p> : null}
        {!data ? <p>No data</p> : null} */}

          {cardsTestimonials.map(({ name, testimonial, id, picture }, index) =>
            <div key={id} className={`keen-slider__slide max-w-[348px] number-slideTall${index+1}`}>
              <CardHome
                src={picture}
                alt={name}
                TitleSize="h6"
                TitleLabel={name}  
                TextSize="normalCardHome"             
                TextLabel={testimonial}
                imagesize="px100"
                ContainerTitleProps=""
                ContainerTextProps=""
              />
            </div>
          )}

        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details?.slides.length - 1
              }
            />
            {loaded && instanceRef.current && (
              <div className="dots">
                {[
                  ...Array(instanceRef.current.track?.details?.slides.length).keys(),
                ].map((idx) => {
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        instanceRef.current?.moveToIdx(idx)
                      }}
                      className={"dot" + (currentSlide === idx ? " active" : "")}
                    ></button>
                  )
                })}
              </div>
            )}
          </>
        )}
      </div>

    </>
  )
}

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg

      onClick={props.onClick}
      className={`w-5 h-5 arrow ${props.left ? "arrow--left" : "arrow--right"
        } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}

