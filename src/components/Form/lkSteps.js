import {Component} from 'react'
import './steps.css'

export default class LkSteps extends Component {

  render() {
    // let step = this.props.active;
    // let completed = this.props.completed;

    const {active,completed,contract_type} = this.props;

    
    const firstStep = () =>       
      contract_type === 1 ? "" : (
                                  <div 
                                  className={`step ${active === 1 ? "active" :""} ${active>1 && completed ? "completed" :""}`}
                                  onClick={()=>{this.props.onClick(1)}}
                                >
                                  <span className="breadcrumb__inner">
                                    <span className="breadcrumb__title">Компания</span>
                                    <span className="breadcrumb__desc">Поиск компании по ИНН</span>
                                  </span>
                                </div>
                                );

    const secondTitle = () => contract_type === 0 ?  
    (
    <>
    <span className="breadcrumb__title">Реквизиты</span>
    <span className="breadcrumb__desc">Контактная Информация</span>
    </>
    ) 
    : 
    (
     <span className="breadcrumb__title">Контактная Информация</span>      
    );


    return (
      <nav className="sixteen wide column">  
        <div className="steps_container">
          <div className="steps">
            {firstStep()}
            <div 
              className={`step ${active === 2-contract_type ? "active" :""} ${active>2-contract_type && completed ? "completed" :""}`}
              onClick={()=>{this.props.onClick(2-contract_type)}}
            >
              <span className="breadcrumb__inner">
                {secondTitle()}
              </span>
            </div>
            <div 
              className={`step ${active === 3-contract_type ? "active" :""} ${active>3-contract_type && completed ? "completed" :""}`}
              onClick={()=>{this.props.onClick(3-contract_type)}}
            >
              <span className="breadcrumb__inner">
                <span className="breadcrumb__title">Договор</span>
              </span>
            </div>
            <div 
              className={`step ${active === 4-contract_type ? "active" :""} ${active>4-contract_type ? "completed" :""}`}
              onClick={()=>{this.props.onClick(4-contract_type)}}
            >
              <span className="breadcrumb__inner">
                <span className="breadcrumb__title">Личный кабинет</span>
              </span>
            </div>
          </div>
        </div>
      </nav>
    )
  }  
}