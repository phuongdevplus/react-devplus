import React, {useState, useEffect, useInsertionEffect} from "react";
import RightMenu from "./RightMenu";
import NavBar from "./Navbar";
import HeaderContainer from "./style";
import ModalRightMenu from "./ModalRightMenu";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../../redux/actions/home";
import {FAKE_DATA_IMG} from '../../api/urls'

function Header() {
    const data = useSelector(state => state.posts.data);
  // const requesting = useSelector(state => state.posts.requesting);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(loadPosts(FAKE_DATA_IMG));
    },[])
  console.log('data', data)
    const [img, setImg] = useState('')
    const [currentImg, setCurrentImg] = useState(img.tabIndex)
    const [showRightMenu, setShowRightMenu] = useState(false)
    const [showModal, setShowModal] = useState(false)
    useEffect(()=>{
        if(!showRightMenu){
            setShowModal(false)
        }
    },[showRightMenu])
   
    if(currentImg>5){
        setCurrentImg(0)
    }
    if(currentImg < 0){
        setCurrentImg(5)
    }
    useEffect(()=>{
        if(data){
        data[0].images.map((img, index)=>{
            if(index === currentImg){
                console.log(img.src)
                setImg(img.src)
            }else{

            }
        })}
    },[currentImg])
    console.log(currentImg)
    return (
        <div className="container-fluid p-0" >
                <HeaderContainer>
                    <NavBar value = {{showRightMenu,setShowRightMenu}}/> 
                    <RightMenu value ={{data, showRightMenu, setShowRightMenu, showModal, setShowModal, setImg, setCurrentImg, img}}/>
                    {
                        showModal?<ModalRightMenu value = {{showModal, setShowModal, img, setImg, currentImg,setCurrentImg}}/>:''
                    }
                </HeaderContainer>
        </div>
    )
}
export default Header