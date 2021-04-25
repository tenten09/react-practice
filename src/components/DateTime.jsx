import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
 
const weekday = ['日', '月', '火', '水', '木', '金', '土'];
 
export default class DateTime extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  
    componentDidMount() {
      setInterval( () => {
        this.setState({
          current: new Date().toLocaleString(), // 現時刻
          year: new Date().getFullYear(), // 年
          month: new Date().getMonth()+1, // 月
          date: new Date().getDate(), // 日
          week: weekday[new Date().getDay()], // 曜日
          hours: new Date().getHours(), // 時
          minutes: new Date().getMinutes(), // 分
          seconds: new Date().getSeconds(), // 秒
        })
      },1000)
    }
 
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>現在時刻</Text>
           <View style={styles.box}>
             <Text style={styles.text}>{this.state.current} ({this.state.week})</Text>
          </View>
 
          <View style={styles.box}>
            <Text style={styles.text}>
              {this.state.year}年
              {this.state.month}月
              {this.state.date}日 
              {this.state.hours}時
              {this.state.minutes}分
              {this.state.seconds}秒
              ({this.state.week})
            </Text>
          </View>
 
        </View>
      );
    }
  }
 
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 24,
      margin: 10,
    },
    box: {
      borderWidth: 1,
      borderColor: "black",
      borderRadius: 10,
      width: "95%",
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
    }
  });