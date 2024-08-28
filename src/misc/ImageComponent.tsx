import bild from 'C:/Users/sgb866/Interntid/portfoliowebsite/src/images/closetransp.png'

const ImageComponent = () => {
    return (
        <div className='flex justify-center'>
            <img
                src={bild}
                alt='example'
                className=' w-96 h-full object-cover rounded-lg shadow-lg'
            />
        </div>
    );
}

export default ImageComponent;