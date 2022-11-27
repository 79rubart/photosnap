import Gallery from "../../components/Gallery"
import StoriesHeaderCard from "../../components/StoriesHeaderCard"
import desktop from "../../assets/img/stories/desktop/moon-of-appalacia.jpg"
import mobile from "../../assets/img/stories/mobile/moon-of-appalacia.jpg"
import tablet from "../../assets/img/stories/tablet/moon-of-appalacia.jpg"

const Stories = () => {

  return (
    <>
      <StoriesHeaderCard
        author='by John Appleseed'
        background='black'
        btnText='Read the story'
        date='March 2nd 2020&nbsp;'
        text='The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.'
        title='Hazy full moon of appalachia'
        topText={`Last month's featured story`}

        alt='Hazy full moon of appalachia'
        desktop={desktop}
        mobile={mobile}
        tablet={tablet}
      />
      <main>
        <Gallery />
      </main>
    </>
  )
}

export default Stories
