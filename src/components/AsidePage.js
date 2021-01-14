import React from 'react'
import SocialLinks from '../styles/components/SocialLinks'
import Footer from './Footer'


function AsidePage() {
    return (
        <div className="aside-page">
            <div className="aside-header">
                <h3>Let's connect</h3>
                <SocialLinks />
            </div>
            <Footer />
        </div>
    )
}

export default AsidePage
