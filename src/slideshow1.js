import Car_wlp1 from "./image/car/car_wallpaper0.jpg";
import Car_wlp2 from "./image/car/car_wallpaper1.jpg";
import Car_wlp3 from "./image/car/car_wallpaper2.jpg";
import Car_wlp4 from "./image/car/car_wallpaper3.jpg";

function Slideshow_block1_output1(props){
    return (
        
                <img className="Slideshow_block1_img" alt="car info" src={props.car}
                 width="100%" height="500px"/>
        
    )
}

function Slideshow_block1(){
    var slideshow_car_collection = [
        {id:1,car:Car_wlp1},
        {id:2,car:Car_wlp2},
        {id:3,car:Car_wlp3},
        {id:4,car:Car_wlp4}
    ];
    return (
        <div id="Slideshow_block1">
        {slideshow_car_collection.map((val)=><Slideshow_block1_output1 key={val.id} car={val.car}/>)}
        </div>
    )

}

export {Slideshow_block1};