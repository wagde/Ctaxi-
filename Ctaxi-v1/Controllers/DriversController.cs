using Ctaxi_v1.DBContext;
//using System;
//using System.Collections.Generic;
using System.Linq;
//using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Data.Entity;

namespace Ctaxi_v1.Controllers
{
    [Authorize]
    public class DriversController : BaseAPIController
    {
        
        /// with WebApi 1 IHttpActionResult

        public HttpResponseMessage Post([FromBody]DriversTable value)
        {
            
           CtaxiDb.DriversTable.Add(value);
           CtaxiDb.SaveChanges();
             
           return ToJson(true);
        }


        public HttpResponseMessage Get()
        {
         
            var demo = CtaxiDb.DriversTable.OrderBy(driver => driver.dateBegin).AsEnumerable();
          //  var demo1 = CtaxiDb.DriversTable.OrderBy(driver => driver.dateBegin);
            return ToJson(demo);
          
        }

        public HttpResponseMessage Get(int id)
        {
            return ToJson(CtaxiDb.DriversTable.FirstOrDefault(x => x.Id == id));
           /// List.Where(x => x.Id == id).First();
        }



        public HttpResponseMessage Put([FromBody]DriversTable value)
        {
            CtaxiDb.Entry(value).State = EntityState.Modified;
            CtaxiDb.SaveChanges();
            return ToJson(true);
        }


        public HttpResponseMessage Delete(int id)
        {
            CtaxiDb.DriversTable.Remove(CtaxiDb.DriversTable.FirstOrDefault(x => x.Id == id));
            CtaxiDb.SaveChanges();
            return ToJson(true);
        }
     
}
   

}


