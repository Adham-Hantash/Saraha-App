const dataMethods = ['body', 'query', 'headers'];
const validation = (schema)=>{

    return  (req,res,next) => {
        const validationArray = [];
            dataMethods.forEach(key=>{       
                if(schema[key]){
                    const validationRelust = schema[key].validate(req[key],{abortEarly:false});
                    if (validationRelust.error){
                        validationArray.push(validationRelust.error.details)
                    }
                }
            })

        if(validationArray.length > 0){
            return res.json({message:"Validation Error",validationArray})
        }

        else{
            return next()
        }
    
    }
}


export default validation;