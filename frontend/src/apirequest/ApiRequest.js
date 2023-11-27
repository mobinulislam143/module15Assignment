import axios from 'axios';
export async function listStdReq() {
    try{
        let res = await fetch('http://localhost:8000/api/allstd')
        let jsonData = await res.json()
        return jsonData['data']
    }catch(e){
        return []
    }
}

export async function deleteStd(id){
    try{
        let res = await fetch(`http://localhost:8000/api/deletestd/`+id)
        let jsonData = await res.json()
        if(jsonData['status']==='success'){
            return true
        }else{
            return false
        }
    }catch(e){
        console.log(e);
    }
}

export async function createStd(postBody) {
    try {
        let res = await axios.post(`http://localhost:8000/api/createstd/`, postBody);
        console.log('Response:', res);
        
        if (res.status === 200) {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        console.error('Error:', e);
        return false;
    }
}
export async function stdReqById(id){
    try{
        let res = await fetch('http://localhost:8000/api/readStdById/'+id)
        let jsonData = await res.json()
        return jsonData['data'][0]
    }catch(err){
        return []
    }
}
 
export async function updateStd(postBody, id){
    try{
        let res = await axios.post("http://localhost:8000/api/updatestd/"+id, postBody);
        if(res.status === 200){
            return true
        }else{
            return false
        }
    }catch(e){
        return false

    }
}
