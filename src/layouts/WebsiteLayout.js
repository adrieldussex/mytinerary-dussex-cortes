import Footer from '../components/Footer'

export default function WebsiteLayout(props) {
  return (
    <div>
      { props.children }
      <Footer />
    </div>
  )
}
