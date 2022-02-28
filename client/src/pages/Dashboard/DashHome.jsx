import React ,{useEffect}from 'react'
import HomeChart from '../../components/Dashboard/HomeChart'
import TopBoxs from '../../components/Dashboard/TopBoxs'
import WidgetLg from '../../components/Dashboard/WidgetLg';
import WidgetSm from '../../components/Dashboard/WidgetSm';
import {userData} from "../../domyData";
import {GetStatsUsers,GetAllUsers} from '../../redux/actions/UserAction';
import {connect} from "react-redux"
function DashHome({allUsers,statsUser,GetStatsUsers,GetAllUsers}) {
  
  useEffect(()=>{
    GetAllUsers("true");
    GetStatsUsers();
  },[])
    return (
        <div className='z-0 pt-10'>
            <TopBoxs/>
            <HomeChart data={statsUser} grid title="User Analytcis" dataKey="total"/>
            <div className='grid md:grid-cols-3'>
                <div className='w-full md:col-span-1'> 
                    <WidgetSm users={allUsers}/>
                </div>
                <div className='w-full md:col-span-2'>
                    <WidgetLg/>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps=(state)=>{
  return{
    statsUser:state.userState.statsUser,
    allUsers:state.userState.allUsers
  }
}
export default connect(mapStateToProps,{GetStatsUsers,GetAllUsers})(DashHome)