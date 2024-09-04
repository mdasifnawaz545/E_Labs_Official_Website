import { useEffect, useRef } from 'react';
const UploadWidget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();


  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    // console.log("cloud");
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      
      cloudName: 'dpqdgcipi',
      uploadPreset: 'psi4hnj1'
    }, function(error, result) {
      console.log(result);
      // Handle the result or error here
    });
  }, []);


  return (
    <div>
        <button onClick={()=>widgetRef.current.open()}>
        Upload Your Files 
        </button>
    </div>
  )
};

export default UploadWidget;
