function mb(mb_name){
    return {
        phnName : mb_name,
        price :function(){return 500;}
    };
}

let c = mb("IPhone");
document.write(c.phnName +"<br> "+ c.price());