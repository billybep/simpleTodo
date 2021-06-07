import { Container } from 'react-bootstrap'

const ShowDate = () => {

  const today = new Date()

  return(
    <>
      <Container className='mt-4' >
        <h5><strong style={{ fontSize: '1.7rem'}}>Today, </strong>
          <span>
            {
              today
                .toString()
                .slice(0, 16)
            }
          </span>
        </h5>
      </Container>
    </>
  )
}

export default ShowDate