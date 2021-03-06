import React from 'react'
import styled from 'styled-components';

function CourseCard({image, title, paragraph}) {
    return (
        <CourseCardStyled >
            <div className="container">
                <img src={image} alt=""/>
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </CourseCardStyled >
    )
}

const CourseCardStyled = styled.div`
    background-color: var(--background-dark-grey);
    border-left: 1px solid var(--border-color);
    border-top: 8px solid var(--border-color);
    border-right: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    transition: all .4s ease-in-out;
    &:hover{
        border-top: 8px solid var(--primary-color);
        transform: translateY(3px);
    }
    .container{
        padding: 1.2rem;
        h4{
            color: var(--white-color);
            font-size: 1.2rem;
            padding: 0.5rem;
            padding-left: 0.2rem;
            padding-right: 0rem;
            position: relative;
            &::after{
                content: "";
                width: 4rem;
                background-color: var(--border-color);
                height: 3px;
                position: absolute;;
                left: 0;
                bottom: 0;
                border-radius: 10px;
            }
        }

        p{
            padding: .5rem 0;
        }
    }
`;

export default CourseCard;
