import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";

import {
  LineChart,
  PieChart,
} from "react-native-chart-kit";


const largura = Dimensions.get("window").width;


export default function Dashboard() {


  const dadosTemperatura = {

    labels:[
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
    ],

    datasets:[
      {
        data:[
          20,
          32,
          45,
          68,
          72,
          40,
          60
        ],

        color:()=> "#0F766E",

        strokeWidth:3
      }
    ]
  };



  const dadosRegiao = [

    {
      name:"Jardim Aeroporto",
      population:27,
      color:"#0F766E",
      legendFontColor:"#334155",
      legendFontSize:12
    },


    {
      name:"Jardim Esplanada",
      population:30,
      color:"#14B8A6",
      legendFontColor:"#334155",
      legendFontSize:12
    },


    {
      name:"Santa Rosa",
      population:24,
      color:"#5EEAD4",
      legendFontColor:"#334155",
      legendFontSize:12
    },


    {
      name:"Jardim Sampaio",
      population:32,
      color:"#2DD4BF",
      legendFontColor:"#334155",
      legendFontSize:12
    }

  ];




  return(

    <ScrollView 
      style={estilos.container}
      showsVerticalScrollIndicator={false}
    >



      <View style={estilos.topo}>


        <Text style={estilos.titulo}>
          Estação Meteorológica
        </Text>


        <Text style={estilos.status}>
          🟢 Estação online • Dados atualizados agora
        </Text>


      </View>





      <View style={estilos.cards}>


        <View style={estilos.cardInfo}>

          <Text style={estilos.icone}>
            🌡️
          </Text>

          <Text style={estilos.valor}>
            28°
          </Text>

          <Text style={estilos.nome}>
            Temperatura
          </Text>

        </View>




        <View style={estilos.cardInfo}>

          <Text style={estilos.icone}>
            💧
          </Text>

          <Text style={estilos.valor}>
            75%
          </Text>

          <Text style={estilos.nome}>
            Umidade
          </Text>

        </View>





        <View style={estilos.cardInfo}>

          <Text style={estilos.icone}>
            🌬️
          </Text>

          <Text style={estilos.valor}>
            12
          </Text>

          <Text style={estilos.nome}>
            Vento km/h
          </Text>

        </View>


      </View>






      <View style={estilos.cardGrafico}>


        <Text style={estilos.tituloGrafico}>
          Temperatura mensal
        </Text>



        <LineChart

          data={dadosTemperatura}

          width={largura - 70}

          height={220}


          chartConfig={{

            backgroundColor:"#0F766E",

            backgroundGradientFrom:"#0F766E",

            backgroundGradientTo:"#14B8A6",


            decimalPlaces:0,


            color:(opacity=1)=>
            `rgba(255,255,255,${opacity})`,


            labelColor:()=>
            "#FFFFFF",


            propsForDots:{
              r:"5",
              strokeWidth:"2",
              stroke:"#FFFFFF"
            },


            propsForBackgroundLines:{
              stroke:"rgba(255,255,255,0.2)"
            }

          }}


          bezier


          style={estilos.grafico}

        />


      </View>






      <View style={estilos.cardGrafico}>


        <Text style={estilos.tituloGrafico}>
          Temperatura por região
        </Text>



        <PieChart


          data={dadosRegiao}


          width={largura - 70}


          height={230}


          accessor="population"


          backgroundColor="transparent"


          paddingLeft="10"


          chartConfig={{

            color:()=>"#0F766E"

          }}


          absolute



        />


      </View>






      <View style={estilos.cardPrevisao}>


        <Text style={estilos.tituloGrafico}>
          Previsão do dia
        </Text>



        <View style={estilos.linha}>


          <Text style={estilos.previsao}>
            ☀️ Manhã
          </Text>


          <Text style={estilos.temp}>
            26°
          </Text>


        </View>



        <View style={estilos.linha}>


          <Text style={estilos.previsao}>
            🌤️ Tarde
          </Text>


          <Text style={estilos.temp}>
            31°
          </Text>


        </View>




        <View style={estilos.linha}>


          <Text style={estilos.previsao}>
            🌙 Noite
          </Text>


          <Text style={estilos.temp}>
            22°
          </Text>


        </View>


      </View>




    </ScrollView>


  );

}






const estilos = StyleSheet.create({


container:{

flex:1,

backgroundColor:"#EAF7F6",

padding:20

},



topo:{

alignItems:"center",

marginTop:20,

marginBottom:25

},



titulo:{

fontSize:27,

fontWeight:"bold",

color:"#0F766E"

},



status:{

marginTop:8,

color:"#64748B",

fontSize:14

},





cards:{

flexDirection:"row",

justifyContent:"space-between",

marginBottom:20

},




cardInfo:{

width:"31%",

height:120,

backgroundColor:"#FFFFFF",

borderRadius:25,

alignItems:"center",

justifyContent:"center",


shadowColor:"#000",

shadowOpacity:0.1,

shadowRadius:8,

elevation:5

},




icone:{

fontSize:25

},



valor:{

fontSize:24,

fontWeight:"bold",

color:"#0F766E",

marginTop:5

},



nome:{

fontSize:12,

color:"#64748B",

marginTop:5

},





cardGrafico:{

backgroundColor:"#FFFFFF",

borderRadius:28,

padding:20,

marginBottom:20,


shadowColor:"#000",

shadowOpacity:0.1,

shadowRadius:8,

elevation:5

},




tituloGrafico:{

fontSize:20,

fontWeight:"bold",

color:"#0F766E",

marginBottom:15

},




grafico:{

borderRadius:20,

marginLeft:-10

},





cardPrevisao:{

backgroundColor:"#FFFFFF",

borderRadius:28,

padding:20,

marginBottom:30,


shadowColor:"#000",

shadowOpacity:0.1,

shadowRadius:8,

elevation:5

},




linha:{

flexDirection:"row",

justifyContent:"space-between",

paddingVertical:12,

borderBottomWidth:1,

borderBottomColor:"#E2E8F0"

},



previsao:{

fontSize:16,

color:"#334155"

},



temp:{

fontSize:18,

fontWeight:"bold",

color:"#0F766E"

}



});