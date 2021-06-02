var images=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPscZPpPlnfBVDCg7ozg7afES_vFa31weCdA&usqp=CAU", "https://us.123rf.com/450wm/kinokotagawa/kinokotagawa1712/kinokotagawa171200465/91961518-mom-wearing-short-sleeve-clothes-is-pointing.jpg?ver=6",
"https://i.pinimg.com/736x/77/d4/15/77d41520a3f07995b184797a3734bf44.jpg", "https://pngimage.net/wp-content/uploads/2018/05/baby-boss-png-2.png", "https://i.pinimg.com/originals/27/72/ed/2772edd652c534c175f3386e30034a62.jpg"];

var names=["Father", "Mother", "Brother", "Me", "Family book"];
var i=0;
function next(){
    document.getElementById("image").src = images[i];
    document.getElementById("familyMemberName").innerHTML = names[i];
    i++;
    if (i > 4) { i = 0; };
}
