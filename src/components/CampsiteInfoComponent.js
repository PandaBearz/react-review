import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {

    renderComments(comments) {
        if(comments) {
            return (
                <div class="col-md-5 m-1">
                    <h4>Comments</h4>
                    <div>
                        {comments.map((c) => 
                            <div key={c.id}>
                               <p>{c.text}</p>
                               <p>--{c.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(c.date)))}</p>
                            </div>
                        )}
                    </div>
                </div>
            )
        }
        return <div/>
    }
    renderCampsite(campsite) {
        return (
            <div class="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    render() {
            if(this.props.campsite) {
                return <div class="row">
                    {this.renderCampsite(this.props.campsite)}
                    {this.renderComments(this.props.campsite.comments)}
                </div>
            } 
                return <div/>
    }
}

export default CampsiteInfo;