import MenuItem from "./MenuItem"

const Menu = ({items}) => {

  return (
    <div className="section-center">
        {items.map((menu) => {
            return <MenuItem key={menu.id} {...menu}/>
        })} 
    </div>
  )
}
export default Menu