var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment = require("./models/comment");

var data = [
    {
        name:"Cute one",
        image:"https://s-i.huffpost.com/gen/1283372/images/o-NEW-ZEALAND-facebook.jpg",
        description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    },
     {
        name:"Cute two",
        image:"http://ift.tt/1LHNiA1",
        description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    }
    ,
     {
        name:"Cute three",
        image:"http://wafflefarm.com/wp-content/uploads/2016/12/WaffleFarmCampground_NighttimePrimitiveCamping-Slide.jpg",
        description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    }
    ]

function seedDb(){
    Campground.remove({},function(err){
        if(err)
        {
            console.log(err);
        }
        console.log("Removed compnents");
        
        data.forEach(function(seed){
          Campground.create(seed,function(err,campground)
          {
              if(err)
              {
                  console.log(err);
              }
              else
              {
                  console.log("Added a campground");
              }
              
              Comment.create(
                  {
                      text:"First Comment",
                      author:"Homer"
                  },
                  function(err,comment)
                  {
                      if(err)
                      {
                          console.log(err);
                      }
                      else
                      {
                          campground.comments.push(comment);
                          campground.save();
                          console.log("Comment created");
                      }
                  }
                  )
          })  
        });
       
    });
}

module.exports = seedDb;