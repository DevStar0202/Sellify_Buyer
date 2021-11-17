import React from 'react'
import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Finalcart from './Finalcart'
import Allitems from '../products/Allitems'
import Colours from '../components/Colours';
import MobileNum from './MobileNum';
import Kboard from '../products/Kboard.js'
import Shoes from '../products/Shoes.js'
import Veges from '../products/Veges'
import styles from '../components/Styles'
import home1 from '../assets/images/icons/home1.png'
import { Icon, withBadge } from 'react-native-elements'
import { color } from 'react-native-elements/dist/helpers';
import { assertCatchClause } from '@babel/types';
import cod from '../assets/images/payment/cod.png'
import card from '../assets/images/payment/card.png'
import direct from '../assets/images/icons/direct.png'
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')

export default function Viewmore({ route, navigation }) {
    const [number, setnumber] = useState(0)
    const [heartpres, setheartpres] = useState(false)
    const [heartpres1, setheartpres1] = useState(false)
    const { dellall,numm,quantity11,setquantity11,i_dd, setidd,itemsidd, setitemsidd,catag, setnumm,deletee, set, up } = route.params
    const [identity, setidentity] = useState([...i_dd])
    const [quantity1, setquantity1] = useState([...quantity11])

    const [ied, setied] = useState(i_dd)
    const[num, setnum] =useState(numm)

    const [lst, setlst] =useState([0])
    const [itemied, setitemied] = useState(itemsidd)
    const [category, changecategory] = useState(Kboard)
    const [sett, setsett] = useState(1)
    const [A, setA] = useState(false)
       const c = (id, qun) => {
        for (let i = 0; i < quantity1.length; i++) {
            if (quantity11[i].iD == id) {
                quantity11[i].qun = qun

                return

            }
        }
        setquantity11(id)

    }
    const setkr = () => {
       
        setquantity11(quantity1) 
        setidd(ied)
        setitemsidd(itemied)
       
    
    
     
    }
    const negupdatequantity = (id) => {

        quantity1.map((it) => {
            if (it.iD == id) {
                it.qun = it.qun - 1
                if(heartpres1==true)
                {
                    setheartpres1(false)
                }
                else{setheartpres1(true)}
                if(it.qun<1)
                {
                    del(id)
                }
              

            }

        })
    }
    const del = (id) => {
const newied = ied.filter((item) => 
{return (item != id)}
)
setied(newied)
const newitemied = itemied.filter((item) => 
{return (item != id)}
)
setied(newitemied)
        const newquantity = quantity1.filter((item) => {
            return(item.iD !=id)
            
        })
        if(heartpres1==true)
                {
                    setheartpres1(false)
                }
                else{setheartpres1(true)}
        setquantity1(newquantity)
        setquantity11(quantity1) 
    }
    const posupdatequantity = (id) => {
        quantity1.map((it) => {
            if (it.iD == id) {
                // alert('pos')
                //  it.qun=item.qun + 1
                it.qun = it.qun + 1
                if(heartpres1==true)
                {
                    setheartpres1(false)
                }
                else{setheartpres1(true)}



            }
        })
        setsett(set+1)
    }
    const printqunn = (id) => {
        const val = quantity1.map((it) => {

            if (it.iD == id) {
                return it.qun
            }
        })
        return val
    }
    const checkid = (id) => {
        // const {id}=props
        // alert(acha)
        // alert(i_d[2])
        for (let i = 0; i < quantity1.length; i++) {

            if (quantity1[i].iD == id) {
                return true
            }
        }
        return false

    }
    const checkquan = (id) => {
        for (let i = 0; i < quantity1.length; i++) {
            if (quantity1[i].iD == id) {
                if (quantity1[i].qun == 0) {
                    return 0
                }

            }
        }
        return 5

    }

    useEffect(() => {
        if (catag == 'Shoes') {
            changecategory(Shoes)
        }
        else if (catag == 'Computers') {
            changecategory(Kboard)
        }
        else {
            changecategory(Veges)
        }
    });

   //const [item, setitem] = useState('Shoes')
    const renderItems = ( {item} ) => {
        const { id, title, price, image } = item


        return (
            <View style={styles.item_container}>
                <Text style={{ ...styles.item_specific_title }}>{title}</Text>
                <Image source={image} style={{ alignSelf: 'center', width: 150, height: 150 }} />
                <Text style={{ alignSelf: 'flex-end', marginRight: 20, marginBottom: 10 }}>RS.{price}</Text>
                <View style={styles.addcart}>
                
                {checkid(item.id) == false ? <TouchableOpacity onPress={() => { setnum(num+1);setied([...ied, item.id]);setitemied([...itemied, item.id]);setsett(set+1);setquantity1([...quantity1, {iD: item.id, qun: 1}])}}>
                                <Text style={{ fontSize: 10 }}>Add to cart</Text></TouchableOpacity>
                                :
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ marginLeft: 9, marginTop: 2 }}>
                                    <TouchableOpacity onPress={() => { setnum(num-1);setsett(set+1);negupdatequantity(item.id)}}>
                                            <Icon
                                                name="trash"
                                                type="entypo"
                                                size={16}

                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ marginLeft: 4, backgroundColor: Colours.yellow, borderRadius: 10 }}>
                                    <Text style={{ marginLeft: 9, marginRight: 9 }}>{printqunn(item.id)}</Text>
                                    </View>

                                    <View style={{ marginLeft: 4 }}>
                                    <TouchableOpacity onPress={() => {setnum(num+1); posupdatequantity(item.id);setsett(1)}}>
                                            <Icon
                                                name="plus"
                                                type="antdesign"
                                                size={16}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                           
                    }
                </View>

            </View>
        )

    }
    return (
        <View style={{ flex: 1 }}>
            <View style={{ alignItems: 'flex-start', marginLeft: 30, marginTop: 47 }}>
                <TouchableOpacity onPress={() => { navigation.goBack(); setnumm(num); setkr() ;
                 if(quantity1.length<2)
                 {
                     dellall(1)
                 }
                }}>
                    <Icon
                        name="arrowleft"
                        type="antdesign"
                        color={Colours.barcolour}
                        size={22}

                    />
                </TouchableOpacity>

            </View>
            <View style={{ alignItems: 'center', marginTop: 20 }}>

                <Text style={{ fontFamily: 'Medium', fontSize: 40 }}>Danial Store</Text>
                <View style={{ borderWidth: 1, height: 0, width: 250, marginTop: -10 }}></View>
            </View>
            <View style={{ marginTop: 72, marginLeft: 30, flexDirection: 'row' }}>
                <View style={{marginBottom: 10}}><Image source={home1} /></View>
                
                <Text style={{ fontWeight: '500', fontFamily: 'Medium', marginTop: 3, marginLeft: 8, fontSize: 18, color: 'black' }}>Home</Text>
                <View style={{ marginTop: 10, marginLeft: 10 }}>
                <Image source={direct} />
                </View>
                <Text style={{ fontWeight: '700', fontFamily: 'Medium', marginTop: 3, marginLeft: 8, fontSize: 18, color: 'black' }}>{catag}</Text>
            </View>
            <View style={{ borderColor: '#D9CDCD', marginBottom: 10, width: 310, height: 0, borderWidth: 0.4, marginTop: -10, marginLeft: 25, marginRight: 25 }}></View>
            <View style={{ marginLeft: 25, marginTop: 10 }}>
            <ScrollView style={{ flexGrow: 0.65 }} showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior='automatic' bounces={false}>
                <FlatList   
                    data={category}
                    renderItem={renderItems}
                    keyExtractor={item => item.id}
                    // horizontal = {true}
                    numColumns={2}
                    showsHorizontalScrollIndicator={false}
                />
                </ScrollView>
            </View>
        </View>
    )

}