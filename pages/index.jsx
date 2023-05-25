import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

const teamMembers = [
  {
    name: 'John Doe',
    title: 'Medical Doctor',
    bio: 'Dr. John Doe has been practicing medicine for over 20 years...',
    imageSrc:
      'https://media.istockphoto.com/id/1203995945/photo/portrait-of-mature-male-doctor-wearing-white-coat-standing-in-hospital-corridor.jpg?s=612x612&w=0&k=20&c=Hk-dqLqHXyYa4aTqjieXNk9-HQSE8WEYUAjA1sXsy_s=',
  },
  {
    name: 'Jane Smith, RN',
    title: 'Registered Nurse',
    bio: 'Jane Smith is a highly experienced registered nurse with...',
    imageSrc:
      'https://media.istockphoto.com/id/1321677643/photo/medical-concept-of-young-beautiful-female-doctor-in-white-coat-with-phonendoscope-waist-up.jpg?s=612x612&w=0&k=20&c=1Gw9l7ztJ4nVY9Hk_BvICDbG5L7Wp7wplC3tUZS-1Dw=',
  },
  {
    name: 'Dr. James Brown',
    title: 'Cardiologist',
    bio: 'Dr. James Brown is a board-certified cardiologist with a...',
    imageSrc:
      'https://media.istockphoto.com/id/938438758/photo/confident-doctor-posing-at-the-hospital.jpg?s=612x612&w=0&k=20&c=dv_py_4-TfxJzzgQTELMcLrzzO0l5Xtxv4WTHhgWvmY=',
  },
]

const whoCanUse = [
  {
    title: 'Individuals',
    description:
      'Get instant and affordable healthcare without waiting in line.',
    imageSrc: '/individual.png',
  },
  {
    title: 'Doctors',
    description:
      '“Register as a specialist, increase your patients and teleconsultations. Stay safe and earn more from anywhere',
    imageSrc: '/doctors.png',
  },
  {
    title: 'Clinics & Hospitals',
    description:
      'Are you an Hospital Administrator? Register your doctors for instant booking and earn additional revenue',
    imageSrc: '/medicine.png',
  },
  {
    title: 'Pharmacies',
    description:
      'Register your pharmacy to gain access to additional patients and a referral network that will boost your bottom-line',
    imageSrc: '/clinic.png',
  },
  {
    title: 'Medical Labs',
    description: 'Are you a Medical lab administrator ? Register your lab',
    imageSrc: '/scientist.png',
  },
  {
    title: 'Employers',
    description:
      'Register your company to increase the morale and confidence of your workforce by focusing on corporate wellness',
    imageSrc: '/job.png',
  },
]

const Home = ({ id }) => {
  return (
    <div className=" h-screen flex flex-col scroll-smooth font-poppins">
      <Head>
        <title>MedReach365</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <main className="flex-1">
        <section className="bg-hero-pattern bg-center bg-no-repeat bg-cover bg-fixed py-20 opacity-80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl text-indigo-800 font-semibold tracking-wide uppercase">
                Welcome to Medical Reach 365
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl">
                We provide exceptional care and service to our patients
              </p>
              <button className="mt-6 text-gray-100 px-3 py-2 bg-indigo-600 border border-gray-100">
                <Link className="" href="#">
                  Book DR Now
                </Link>
              </button>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-20 px-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-3xl  text-center text-indigo-600 font-semibold tracking-wide sm:text-4xl uppercase">
                Healthcare at your fingertip
              </h2>
              <p className="mt-2 text-lg leading-8  text-gray-600">
                MedReach365 is your onestop to healthcare service With MedReach,
                you can get access to your special doctors on demand from
                different specializations and different ethnic background where
                you can interact in your local dialect with a specialist. We are
                the most affordable teleconsultation platform in Nigeria.
              </p>
            </div>
          </div>
        </section>
        <section className="py-20 px-10">
          <div className="grid grid-cols-2 gap-6">
            <div className="md:col-span-1 col-span-2">
              <img
                className="w-full"
                src="https://media.istockphoto.com/id/1352489891/photo/group-of-healthcare-workers-talking-in-a-meeting-at-the-hospital.jpg?s=612x612&w=0&k=20&c=lfaCqJkpSG7Qjk-1D6o8VvY_eb-H3iN-e0iNU2O5Bl0="
                alt="doctors"
                loading="lazy"
              />
            </div>
            <div
              className="md:col-span-1 col-span-2 flex flex-col justify-center"
              id="about"
            >
              <h2 className="text-lg text-indigo-600 font-semibold tracking-wide uppercase">
                Our Mission
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                We are dedicated to providing the best care to our patients
              </p>
              <p className="mt-4 text-lg text-gray-500 lg:mx-auto">
                With Med Reach, you can get access to affordable
                teleconsultations with top-notch doctors and specialists
                worldwide. Our partnerships and integrations allow us to deliver
                diagnostics and medicine right to your door Healthcare for
                everyone. Anytime. Anywhere.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="text-lg text-indigo-600 font-semibold tracking-wide uppercase">
                Meet our team
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                We are dedicated to providing the best care to our patients
              </p>
            </div>
            <div
              className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
              id="book"
            >
              {teamMembers.map((teamMember, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                    <img
                      className="w-full h-full object-cover"
                      src={teamMember.imageSrc}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-medium text-gray-900">
                      {teamMember.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {teamMember.title}
                    </p>

                    <p className="mt-2 text-sm text-gray-500">
                      {teamMember.bio}
                    </p>
                  </div>
                  <button className="p-2 font-normal text-sm bg-indigo-600 text-white rounded">
                    Read more
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20 px-10">
          <div
            className="flex md:justify-between flex-col md:flex-row gap-8 md:gap-0"
            id="how"
          >
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl md:text-left text-center text-indigo-600 font-bold tracking-wide uppercase">
                Who can use Med Reach?
              </h2>
              <p className="mt-4 md:text-left text-center md:max-w-xl max-w-full text-xl text-gray-500 lg:mx-auto">
                We proudly collaborate with board-certified doctors, Hospitals,
                Pharmacy stores, Medical lab outlets, Employers, HMOs, and
                telecom service providers as the Uber for healthcare.
              </p>
            </div>
            <div className="md:self-start self-center">
              <img
                className="md:w-96 w-full"
                src="https://media.istockphoto.com/id/1404962407/photo/happy-muslim-doctor-working-at-the-hospital-using-a-tablet.jpg?s=612x612&w=0&k=20&c=PJlnI11CSpP9dkMoc4NRSXz4682lNCmbSfZpMWVrfcs="
                alt="doctors"
                loading="lazy"
              />
            </div>
          </div>
          <div
            className="mt-20 md:px-20 px-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            id="product"
          >
            {whoCanUse.map((whoCanUse, index) => (
              <div
                key={index}
                className="py-8 px-3 border border-indigo-600 flex flex-col gap-3 items-center rounded shadow"
              >
                <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
                  <img
                    className="w-full h-full object-cover"
                    src={whoCanUse.imageSrc}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-medium text-gray-900">
                    {whoCanUse.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {whoCanUse.description}
                  </p>
                </div>
                <button className="px-3 py-2 text-indigo-600 border border-indigo-600 hover:text-white hover:bg-indigo-600 rounded">
                  <Link className="" href="#">
                    Create Account
                  </Link>
                </button>
              </div>
            ))}
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default Home
