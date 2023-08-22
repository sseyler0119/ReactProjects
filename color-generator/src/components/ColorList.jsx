import { nanoid } from "nanoid";
import SingleColor from "./SingleColor";

const ColorList = ({colors}) => {

  return (
    <section className="colors">
        {colors.map((color, index) => {
            console.log('color' + color);
            return <SingleColor key={nanoid()} color={color} index={index} />;
        })}
    </section>
  )
}
export default ColorList