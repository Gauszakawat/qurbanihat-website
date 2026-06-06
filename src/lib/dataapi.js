export const getcow =async ()=>{
     const res = await fetch('/public/data.json');
    const data = await res.json();
    return data;

}