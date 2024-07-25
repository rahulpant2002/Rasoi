import ItemList from "./ItemList";

const MenuCategory = ({data, showItems, setShowIndex})=>{
    const handleClick = ()=>{
        setShowIndex();
    }

    return(
        <div className="shadow-lg w-[50%] mx-auto">
            <div className=" mx-auto my-4 p-4 flex justify-between font-bold cursor-pointer border-b-2 border-black transition-all" 
                onClick={handleClick}>
                <p>{data.title} ({data.itemCards.length})  </p>
                <p>⬇️</p>
            </div>
            
            {showItems && <ItemList items={data?.itemCards} />}
        </div>
    )
}
export default MenuCategory;