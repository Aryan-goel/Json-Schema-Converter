import { useState } from 'react';
import './App.css';
import { AiOutlineFile,AiOutlineFileExclamation } from 'react-icons/ai';
import { BiCodeCurly} from 'react-icons/bi';


function App() {
  const [isChecked, setIsChecked] = useState(false);
  const [formData, setFormData] = useState("");
  const [text, setText] = useState("Please Enter Json Schema");

  function handleOnchange(e) {
    setFormData(e.target.value);
  }

  const handleCheckBox=(e)=> {
    setIsChecked(e.target.checked);
    console.log("hello");
  }

  let stuff=[]
  try{
    stuff = formData.length > 0 ? JSON.parse(formData) : " ";

}
  catch(e){
   
    console.log(e);

    
  }
  
  console.log(stuff);

  function doesExist() {
    if (stuff.length === 1) {
      return true;

    }
    else {
      return false;
    }
  }
  const EmptyUI = () => {

  return (
    
    <div className='ui-text-wrapper'>
      <BiCodeCurly size={50} color='red'/>
      <div className='ui-text'>Please Enter a Valid JSON to Render a Form</div>
    </div>
  );
};

 
 
 
  //! convert all form outer tags to div's
  console.log(stuff.length);
  return (

    
  <div /* style={{backgroundColor:'#222222'}} */>
        <div className='header-wrapper' /* style={{ backgroundColor: theme.colors.background }} */>
          <div className='header'>
            <div className='title' /* style={{ color: theme.colors.text }} */>JSON Schema Renderer</div>
          </div>
        </div>
        <div className="app">


          <div className="textarea">
            <textarea placeholder='Please Enter The Json Schema' className='textarea1' name="" id="" cols="30" rows="10" onChange={handleOnchange}></textarea>
          </div>

        <div className={!doesExist() ? " " : 'ui-wrapper'} style={{ backgroundColor:'#222222'}}>
            {/* {
              !doesExist() ? "" : <EmptyUI />
              !isValid ? <InvalidUI /> :
                 <FormUI data={json}  />
            } */}
          {
            doesExist() ? <EmptyUI /> :""
              // Array.isArray(stuff) ? <InvalidUI /> :""
                
          }
            <div hidden={doesExist()}>
              <div className='form'>
                <div className='compStyle'>
                  <form action="" className='form1'>
                    <label className='labelWeight'>{stuff[0]?.label}</label>
                    <input style={{ padding: '0.5rem', backgroundColor: '#f0f7ff' }} className='inputStyle' type="text" hidden={doesExist()} placeholder={stuff[0]?.label} ></input>
                  </form>
                </div>





                <div className='compStyle'>
                  <form action="" id={stuff[1]?.sort} className='form1'>
                    <div>
                      <label className='labelWeight' htmlFor="">{stuff[1]?.label}</label>
                    </div>
                  </form>
                  <div className='breakLine'></div>
                  <div className='radioStyle'>
                    <div className="app">
                      <div className='compColor'>

                        <input className='radioStyle1' type="radio" name='test' hidden={doesExist} value='option1' />{stuff[1]?.subParameters[1]?.label}
                      </div>
                      <div hidden={doesExist()} className='compColor'>
                        <input className='radioStyle1' type="radio" name='test' hidden={doesExist} value='option2' />{stuff[1]?.subParameters[2]?.label}
                      </div>
                    </div>
                  </div>
                </div>


                <div className='compStyle'>
                  <form action="" className='form1'>
                  <label className='labelWeight' style={{ paddingRight: '3.5rem', backgroundColor:'#222222' }}>{stuff[1]?.subParameters[1]?.subParameters[0]?.label} </label>
                    <div className='dropDownStyle'>
                    <select style={{ padding: '0.5rem', backgroundColor: '#f0f7ff' }} className='inputStyle' hidden={doesExist()} name="" id="">
                        <option className='dropDownStyle' value="">{stuff[1]?.subParameters[1]?.subParameters[0]?.validate.options[0]?.label}</option>
                        <option value="">{stuff[1]?.subParameters[1]?.subParameters[0]?.validate.options[1]?.label}</option>
                        <option value="">{stuff[1]?.subParameters[1]?.subParameters[0]?.validate.options[2]?.label}</option>
                        <option value="">{stuff[1]?.subParameters[1]?.subParameters[0]?.validate.options[3]?.label}</option>
                        <option value="">{stuff[1]?.subParameters[1]?.subParameters[0]?.validate.options[4]?.label}</option>
                      </select>
                    </div>
                  </form>
                </div>


                <div className='compStyle'>
                  <form action="" className='form1'>
                    <label className='labelWeight' htmlFor="">{stuff[2]?.label} </label>
                  </form>
                  <div className='breakLine'></div>
                  <form action="" className='form1'>
                    <label className='labelWeight' style={{ paddingRight: '3.5rem' }} htmlFor="">{stuff[2]?.subParameters[0]?.label}</label>
                    <div className='dropDownStyle'>
                      <select style={{ padding: '0.5rem', backgroundColor: '#f0f7ff' }} className='inputStyle' hidden={doesExist()} name="" id="">
                        <option value="">{stuff[2]?.subParameters[0]?.validate.options[0]?.label}</option>
                        <option value="">{stuff[2]?.subParameters[0]?.validate.options[1]?.label}</option>
                        <option value="">{stuff[2]?.subParameters[0]?.validate.options[2]?.label}</option>
                      </select>
                    </div>
                  </form>



                  <div action="" className='form1'>
                    <label className='labelWeight' htmlFor="">{stuff[2]?.subParameters[1]?.label}</label>
                    <div className='dropDownStyle'>
                      <select style={{ padding: '0.5rem', backgroundColor: '#f0f7ff' }} className='inputStyle' hidden={doesExist()} name="" id="">
                        <option value="">{stuff[2]?.subParameters[1]?.validate.options[0]?.label}</option>
                        <option value="">{stuff[2]?.subParameters[1]?.validate.options[1]?.label}</option>
                        <option value="">{stuff[2]?.subParameters[1]?.validate.options[2]?.label}</option>
                      </select>
                    </div>
                  </div>



                  <div className='form1'>
                    <input hidden={doesExist()}  type="checkbox" /* defaultChecked={isChecked} */ onChange={handleCheckBox}  name="" id="" />{stuff[2]?.subParameters[2]?.label}
                  </div>

                  <div className='form1'>
                    <label className='labelWeight' style={{ paddi: '' }} hidden={!isChecked} htmlFor="">{stuff[2]?.subParameters[3]?.label}</label>
                    <div style={{paddingRight:''}} className='dropDownStyle'>
                      <select style={{ padding: '0.5rem', backgroundColor: '#f0f7ff',paddingLeft:'0.5rem' }} className='inputStyle' hidden={!isChecked} name="" id="">
                        <option value="">{stuff[2]?.subParameters[3]?.validate.options[0]?.label}</option>
                        <option value="">{stuff[2]?.subParameters[3]?.validate.options[1]?.label}</option>
                        <option value="">{stuff[2]?.subParameters[3]?.validate.options[2]?.label}</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* <Toggle
                  label="Hide Advanced Field"
                  toggled={true}
                  onClick={logState}
                /> */}

                <div className='form1'>
                  <label className='labelWeight' style={{ paddingLeft: '1.5rem' }} htmlFor="">{stuff[3]?.label}</label>
                  <div className='dropDownStyle'>
                    <select style={{ padding: '0.5rem', backgroundColor: '#f0f7ff',marginLeft:'13rem' }} className='inputStyle' hidden={doesExist()} name="" id="">
                      <option value="">{stuff[3]?.validate.options[0]?.label}</option>
                      <option value="">{stuff[3]?.validate.options[1]?.label}</option>
                      <option value="">{stuff[3]?.validate.options[2]?.label}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
  );
  
}

export default App;

const InvalidUI = () => {

  // const theme = useContext(ThemeContext);

  return (
    <div className='ui-text-wrapper'>
      <AiOutlineFileExclamation size={50} /* color={theme.colors.error} */ />
      <div className='ui-text' /* style={{ color: theme.colors.text }} */>The entered JSON is not a valid UI-schema</div>
    </div>
  );
};

