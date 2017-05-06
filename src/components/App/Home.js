import React from 'react';
import CardList  from '../../containers/Review/Card/CardList'
import Slideshow from '../../containers/Slideshow/Slideshow'

export const Home = ({

}) => (
    <div>
        <Slideshow 
            imgSet={[
            'https://firebasestorage.googleapis.com/v0/b/movies-52a54.appspot.com/o/bh6.jpg?alt=media&token=6fb5022f-97cd-4bdf-b962-ad3f130f8fdc',
            'https://firebasestorage.googleapis.com/v0/b/movies-52a54.appspot.com/o/cmiuc.jpg?alt=media&token=459e8333-3635-4a2f-868b-7d5f5a581aca',
            'https://firebasestorage.googleapis.com/v0/b/movies-52a54.appspot.com/o/gotg1.jpg?alt=media&token=670b0219-0d35-4f69-b63a-154142e88736',
            'https://firebasestorage.googleapis.com/v0/b/movies-52a54.appspot.com/o/starwar1.jpg?alt=media&token=63252594-a93a-4713-89fd-1d35b99e51aa',
            ]} />

        <div className="container">
            <div className="row">
            <div className="col-md-8 col-xs-12 col-sm-12">
                <CardList />
            </div>
            <div className="col-md-4 visible-md visible-lg">
                <div  style={{marginTop:"6%", backgroundColor:"white"}}>
                    sidebar
                </div>
            </div>
            </div>
        </div>    
    </div>
)

export default Home