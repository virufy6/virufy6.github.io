import Button from "../../atoms/button/Button";

export default function ButtonGroup({ size, type, path, buttons }) {

return (
    <>
      <div className="flex-auto justify-around">
        {buttons.map((i) => (
          <Button key={i} type={type} size={size} path={path} label={i}/>
        ))}
      </div>
    </>
  );
}
