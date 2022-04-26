// Code your solution in this file!

function distanceFromHqInBlocks(dist)
{
    let blocks = Math.abs(dist - 42);
    return blocks;
}

function distanceFromHqInFeet(dist)
{
    let feet = (Math.abs(dist - 42)) * 264;
    return feet;
}

function distanceTravelledInFeet(start, end)
{
    let feet = (Math.abs(end - start)) * 264;
    return feet;
}

function calculatesFarePrice(start, destination)
{
    let feet = (Math.abs(destination - start)) * 264;
    let chargedFeet = feet - 400;
    if (feet <= 400)
    {
        return 0;
    }
    else if (feet > 400 && feet <= 2000)
    {
        let price = chargedFeet * .02;
        return price;
    }
    else if (feet > 2000 && feet < 2500)
    {
        return 25;
    }
    else{
        return 'cannot travel that far';
    }
}