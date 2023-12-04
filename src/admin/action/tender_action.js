import axios from "axios"



export const UploadTask = (obj)=> async dispatch =>{
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
    };
    try {
        
        const response = await axios.post('http://localhost:8005/check',obj);

        console.log("response",response);
      
        //  const response1 = await axios.post('http://localhost:5000/getStuByClass',);
        // console.log(response1);
        // console.log("oksklsllsls")
        dispatch({
           type:'GET_STUDENTS_SUCCESS',
        //    payload:response1.data
       })
    } catch (error) {
       dispatch({
           type:'GET_STUDENTS_FAILED',
           payload:error
       })
    }   
}


