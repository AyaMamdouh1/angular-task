import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'potoflio',
  templateUrl: './potoflio.component.html',
  styleUrls: ['./potoflio.component.css']
})
export class PotoflioComponent {

  constructor() { }
 Src1:string="../../assets/cabin.png";
  Src2:string="../../assets/cake.png";
  Src3:string="../../assets/circus.png";
  Src4:string="../../assets/game.png";
  Src5:string="../../assets/safe.png";
  Src6:string="../../assets/submarine.png";
  images:any=[this.Src1,this.Src2,this.Src3,this.Src4,this.Src5,this.Src6];


  img1=document.getElementById("img1");
  img2=document.getElementById("img2");
  img3=document.getElementById("img3");
  img4=document.getElementById("img4");
  img5=document.getElementById("img5");
  img6=document.getElementById("img6");

img:any=[this.img1,this.img2,this.img3,this.img4,this.img5,this.img6]

htmlCollection= document.getElementsByTagName('img');




//

layer:any;
i:any;

 newlayer1=document.getElementById("newlayer");

slide(e: any)
{
$("#newlayer").removeClass("d-none");
$("#newlayer").addClass("d-flex");

  var mouse=e.target;
  var parent=mouse.parentElement;
  var child=parent.firstChild;
 var imgstore = child.getAttribute("src");
  var layer1img=document.getElementById("layer1img");
  var y=layer1img?.setAttribute("src", imgstore);
// $("#newlayer").css("background","red")
var flex="flex";
// document.getElementById("newlayer")?.setAttribute("display","flex");

// if(e = document.getElementsByClassName(".layer").item(1))



//  var img=x?.firstElementChild?.getAttribute("src");


 


//   if(this.layer[i])
//   {console.log(this.img[i])}
// }

//    console.log(this.img[3])
//   // this.img.src=event.target.src


}
close()
{
  $("#newlayer").removeClass("d-flex");
$("#newlayer").addClass("d-none");

}
}

