import { useEffect, useMemo, useState,useCallback, memo } from 'react'

function App() {
  const [exchangeData1, setExchangeData1] = useState({});
  const [exchangeData2, setExchangeData2] = useState({});
  const [bankData, setBankData] = useState({});

  useEffect(() => {
    setExchangeData1({
      returns: 100
    });
  }, [])

  useEffect(() => {
    setExchangeData2({
      returns: 100
    });
  }, [])
  
  useEffect(() => {
    setTimeout(() => {
      setBankData({
        income: 100
      });
    }, 5000)
  }, [])


  const calculateCryptoReturns = useCallback(function(){
    return exchangeData1.returns + exchangeData2.returns;
  }, [exchangeData1, exchangeData2])


  return (
    <div>
        <CryptoGainCal calculateCryptoReturns={calculateCryptoReturns} />
    </div>
  )
}


const CryptoGainCal = memo(function({calculateCryptoReturns}){
  console.log("crypto child rerender")
  return <div>
    your crypto returns is {calculateCryptoReturns()}
  </div>
})

export default App