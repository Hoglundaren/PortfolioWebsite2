import bild from '/images/transmelon.png'

const ImageComponent = () => {
    return (
        <div className='flex justify-center '>
            <img
                src={bild}
                alt='example'
                className=' w-96 h-full object-cover rounded-lg shadow-lg dark:shadow-cyan-900'
            />
        </div>
    );
}

export default ImageComponent;