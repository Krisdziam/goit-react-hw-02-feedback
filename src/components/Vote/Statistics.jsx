const Statistics = (options)=>{
 return( 
 <>

        <ul>
          <li>Good:{options.good}</li>
          <li>Neutral:{options.neutral}</li>
          <li>Bad:{options.bad}</li>
          <li>Total:{options.total}</li>
          <li>Positive feedback:{options.positivePercentage}%</li>
        </ul> 
        </>
)

}

export default Statistics