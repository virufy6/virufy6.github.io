import CardHome from "../../molecules/CardHome/CardHomeTall";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Advisor1 from "../../../assets/static/images/ourSupporters/card1-VH.png"
import Advisor2 from "../../../assets/static/images/ourSupporters/card2-VH.png"
import { useEffect, useState } from "react";

export default function CardSliderTall() {

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
      "(min-width: 740px)": {
        slides: { perView: 2, spacing: 1 },
      },
      "(min-width: 1084px)": {
        slides: { perView: 3, spacing: 1 },
      },
      "(min-width: 1600px)": {
        slides: { perView: 3, spacing: 1 },
      },
    },
    slides: { perView: 1 },
  })

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

/*   const [Listing, setListing] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/testimonials');
      const json = await response.json();
      setListing(json.docs);
    };

    fetchData();
  }, []); */
  

  return (
    <>
      <div className="navigation-wrapper mt-0 max-w-[1100px] w-[100vw]">
        <div ref={sliderRef} className="keen-slider  ">

        {isLoading ? <p className="text-center text-2xl">Loading...</p> : null}
        {!data ? <p>No data</p> : null}

          {data.map(({ name, testimonial, id, picture }, index) =>
            <div key={id} className={`keen-slider__slide max-w-[348px] number-slideTall${index+1}`}>
              <CardHome
                src={picture.url}
                alt={name}
                textLabel={testimonial}
                name={name}
                country={"Bolivia"} //hace falta el país en el response del API
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
                instanceRef.current.track.details.slides.length - 1
              }
            />
            {loaded && instanceRef.current && (
              <div className="dots">
                {[
                  ...Array(instanceRef.current.track.details.slides.length).keys(),
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

