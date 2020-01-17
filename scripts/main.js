const numberCount = () => {

    for (i = 1; i <= 100; i++) {
        if ((i % 5 !== 0) && (i % 7 !== 0)) {
            console.log(i)
        }
        if (i % 5 === 0) {
            console.log("Chicken")
        }
        if (i % 7 === 0) {
            console.log("Monkey")
        }
        if ((i % 5 === 0) && (i % 7 === 0)) {
            console.log("ChickenMonkey")
        }

    }
}
numberCount()