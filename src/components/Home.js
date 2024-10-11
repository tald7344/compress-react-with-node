import { useRef, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import Blogs from './blogs/BlogList';
import JSEncrypt from "jsencrypt";

const Home = () => {
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const [name, setName] = useState('Talal');
  const [result, setResult] = useState({});
  
  const changeTitle = () => setName('Assoda');

  useEffect(() => {
    console.log('use effect running');
  }, [name]);	


  // Encrypt request data
  const encryptRequestData = () => {
    let KEY = `-----BEGIN PUBLIC KEY-----
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCpacjMsYHN+81HLpDUmWpi2tu/
    pZL3nSXMXTzcSW0KIcIDBDtxLpfzEKB0slPnQu8czBP6K2COfJrTUJUdjpXzSk3F
    dfjHr3R8Pv3XwA94BkAgS4Flra4EJv9hUFBx901O003K4RbP+aOQ4ukw/OiSdrLI
    TyuMVs6U5pEYRbt+sQIDAQAB
    -----END PUBLIC KEY-----`;
    let encryptor = new JSEncrypt();
    encryptor.setPublicKey(KEY);
    let KeyToEncpt = 'Shake Shake';
    return encryptor.encrypt(KeyToEncpt);
  };
  
  const onSubmit = async () => {
    let keyEncrypt = encryptRequestData();
    const data = fetch('https://staging-api.winshakes.com/api/settings/list', {
      headers: {
        ApiKey: keyEncrypt
      },
    });
    console.log('data : ', data)
  }
  
// console.log('blogs', encryptRequestData());
  return (
    <div className="home py-5">
      {/* <div className="container">
        {error && <div className="alert alert-danger text-center">{ error }</div>}
        {isPending && <div className="my-5"><h3>Loading...</h3></div>}
        {blogs && <Blogs blogs={blogs.slice(0, 4)} title={'Blogs List'}></Blogs>}
      </div> */}
      <button onClick={onSubmit}>encrypt</button>
      <button className="btn btn-success" onClick={changeTitle}>Change Title</button>
    </div>
  );
}

export default Home;