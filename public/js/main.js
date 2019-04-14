const selectSize = () => 
{
    const sizeXL = data.filter((e) => {
        return e.size.includes("XL") === true;
    });
    console.log(sizeXL);
}