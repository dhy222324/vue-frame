import request from "./http"  // request({})
import params from "./params"

// var poxy="/apis"
var poxy=""
// locahost:80/json1811.ashx





var url1="/json1811.ashx"
var url2="/user/topic"



class Apis {
    //首页数据
    getIndexData(){
       return request({
            method:"GET",
            url:url1,
            params:{
                c:"NewIndexController",
                m:"index",
                v:params.v
            }
        })
    }
  //分类数据
    getListData(){
        return request({
             method:"GET",
             url:url1,
             params:{
                c:"NsCakeCenter",
                m:"GetJdListNew",
                v:params.v
            }
         })
     }

     getShowDataOne(data){
        return request({
             method:"GET",
             url:url1,
             params:{
                Name:data.Name,
                c:"NsCakeCenter",
                m:data.m,
                v:params.v
            }
         })
     }
     
     getShowDataTwo(data){
        return request({
             method:"GET",
             url:url1,
             params:{
                City: data.City,
                ProName:data.ProName,
                c:data.c,
                m:data.m,
                v:params.v
            }
         })
     } 
}

export default new Apis();  //{getTest:function(){}}