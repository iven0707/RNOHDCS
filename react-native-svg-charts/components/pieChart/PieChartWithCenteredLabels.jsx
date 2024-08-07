import React from 'react'
import { Platform } from 'react-native'
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'

export default function (props) {

  const data = [
    {
      key: 1,
      amount: 50,
      svg: { fill: '#600080' },
    },
    {
      key: 2,
      amount: 50,
      svg: { fill: '#9900cc' }
    },
    {
      key: 3,
      amount: 40,
      svg: { fill: '#c61aff' }
    },
    {
      key: 4,
      amount: 95,
      svg: { fill: '#d966ff' }
    },
    {
      key: 5,
      amount: 35,
      svg: { fill: '#ecb3ff' }
    }
  ]

  const Labels = ({ slices, height, width }) => {
    const ydistance = Platform.OS == 'harmony' ? 15 : 0

    return slices.map((slice, index) => {
      const { labelCentroid, pieCentroid, data } = slice;
      return (
        <Text
          key={index}
          x={pieCentroid[0] - 15}
          y={pieCentroid[1] - ydistance}
          fill={'white'}
          alignmentBaseline={'middle'}
          fontSize={24}
          stroke={'black'}
          strokeWidth={0.5}
        >
          {data.amount}
        </Text>
      )
    })
  }

  return (
    <>
      {
        props.sort ? <PieChart
          style={{ height: 200 }}
          valueAccessor={({ item }) => item.amount}
          data={data}
          spacing={0}
          outerRadius={'95%'}
          sort={(a, b) => b.amount - a.amount}
        >
          <Labels />
        </PieChart> : <PieChart
          style={{ height: 200 }}
          valueAccessor={({ item }) => item.amount}
          data={data}
          spacing={0}
          outerRadius={'95%'}
        >
          <Labels />
        </PieChart>
      }
    </>
  )

}
