function cubeNumber(number) {
    if(typeof number!="number")
    {
        return "Invalid Input";
    }
    return Math.pow(number,3);
}



function matchFinder(string1, string2) {
    if(typeof string1!="string" || typeof string2!="string")
    {
        return "Invalid Input";
    }
    const ans=string1.includes(string2);
    return ans;
}



function sortMaker(arr) {
    if(arr[0]<0||arr[1]<0)
    {
        return "Invalid Input";
    }
    if(arr[0]==arr[1]){
        return "equal"
    }
    if(arr[0]<arr[1])
    {
        const temp=arr[0];
        arr[0]=arr[1];
        arr[1]=temp;
    }
    return arr;
}



function findAddress(obj) {
    var ans=" "; 
    if(typeof obj.street=="undefined"){
        ans+="__";
    }
    else
    {
        ans+=obj['street'];
    }
    if(typeof obj.house=="undefined"){
        ans+=",__,";
    }
    else
    {
        ans+=","+obj['house']+",";
    }
    if(typeof obj.society=="undefined"){
        ans+="__";
    }
    else
    {
        ans+=obj['society'];
    }
    return ans;
    
}



function canPay(changeArray, totalDue) {
    if(changeArray.length==0)
    {
        return "Invalid Input";
    }
    var sum=changeArray[0]+changeArray[1]+changeArray[2];
    return sum>=totalDue;
}
