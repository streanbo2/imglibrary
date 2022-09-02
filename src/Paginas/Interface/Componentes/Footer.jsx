import './Footer.css'
import UploadButton from './UploadButtons';
import React from 'react'
import { Link } from 'react-router-dom'
import ExitButton from './ExitButton';


export default function Footer() {

    return (
        <div className='footer'>

            <UploadButton />

            <ExitButton/>


        </div>
    );

}