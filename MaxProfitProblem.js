
function rearrangeArraysDescending(time, earning,toConstruct) {
    const earningPerUnitTime = calculateEarningsPerUnitTime(time, earning)
  
    const combinedArray = time.map((t, index) => ({
      time: t,
      earning: earning[index],
      earningPerUnitTime: earningPerUnitTime[index],
      toConstruct: toConstruct[index],
    }))
  
    combinedArray.sort((a, b) => b.earningPerUnitTime - a.earningPerUnitTime)
  
    const rearrangedTime = combinedArray.map((item) => item.time)
    const rearrangedEarning = combinedArray.map((item) => item.earning)
    const rearrangedBuildings = combinedArray.map((item) => item.toConstruct)
  
    return { rearrangedTime, rearrangedEarning,rearrangedBuildings }
  }
  
  function calculateEarningsPerUnitTime(time, earning) {
    const earningPerUnitTime = time.map((t, index) => earning[index] / t)
    return earningPerUnitTime
  }
  
  
  let constructedBuildings = [0, 0, 0]
  function maxProfit(n) {
    let profit = 0
    let currentIndex
  
    if (n < Math.min(...rearrangedTime)) {
      return 0
    } else if (n > rearrangedTime[0]) {
      let temp = n - rearrangedTime[0]
      profit += temp * rearrangedEarning[0]
      currentIndex = 0
      constructedBuildings[0]++
    } else if (n > rearrangedTime[1]) {
      let temp = n - rearrangedTime[1]
      profit += temp * rearrangedEarning[1]
      currentIndex = 1
      constructedBuildings[1]++
    }else {
      let temp = n - rearrangedTime[2]
      profit += temp * rearrangedEarning[2]
      currentIndex = 2
      constructedBuildings[2]++
    }
  
    return profit + maxProfit(n-rearrangedTime[currentIndex])
  }
  
  
  const n = 13 //Input
  const time = [4, 5, 10]
  const earning = [1000, 1500, 3000]
  const toConstruct = ["Pub", "Theatre", "Commercial Park"]
  
  let { rearrangedTime, rearrangedEarning, rearrangedBuildings } =
    rearrangeArraysDescending(time, earning, toConstruct)
  
  console.log(`Earnings - $${maxProfit(n)}`)
  console.log(
    rearrangedBuildings
      .map((item, index) => `${item} - ${constructedBuildings[index]}`)
      .join(", ")
  )
  