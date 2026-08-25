import { Construction_mock_data } from '../mockData/construction_mock_data'
import '../App.css'

const Construction = () => {

    return (
        <section className='constructionSection'>
            <div className='construction-header'>
                <h2 className='construction-title'>
                    Our <span>Construction</span> Services
                </h2>
                <p className='construction-description'>
                    At M.B.M Construction, we specialize in delivering high-quality construction solutions that meet the unique needs of each
                    project. Whether it's residential, commercial, or industrial, we build spaces that stand the test of time.
                </p>
            </div>
            <div className='construction-card-container'>
                {
                    Construction_mock_data.map((curVal) => {
                        const { id, name, description } = curVal;
                        return (
                            <div className='construction-card' key={id}>
                                <div className='card-number'>{String(id).padStart(2, '0')}</div>
                                <h3 className='card-title'>{name}</h3>
                                <p className='card-description'>{description}</p>
                            </div>
                        );
                    })
                }
            </div>
        </section>
    )
}

export default Construction
