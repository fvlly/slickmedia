import { useState } from "react"
import { FormControl,FormLabel,Input} from "@chakra-ui/react"


const SearchBar = ({handleChange}) => {

    const [inputValue,setInputValue] =useState('')

    //helperfunctions
    const onInputChange = (e) =>{
        const {value} = e.target
        setInputValue(value)
        handleChange(value)
    }

  return (
    <FormControl pt={[14,16]} pb={[8,10]}>
    <FormLabel>Search</FormLabel>
    <Input onChange={onInputChange} value={inputValue} type='text'  placeholder="Eg. Batman"/>
   
  </FormControl>
  )
}

export default SearchBar