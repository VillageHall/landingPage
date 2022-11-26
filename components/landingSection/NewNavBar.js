import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { GrMenu } from 'react-icons/gr'

import LogoComponent from './LogoComponent'
import useWindowSize from '../../utils/hook/useWindowSize'
import MenuDrawer from './MenuDrawer'

const NewNavBar = ({ featureSectionRef, teamSectionRef }) => {
  const [hambergerState, setHambergerState] = useState(false)
  const { isMobile } = useWindowSize()
  const onClickFeatures = () => {
    featureSectionRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const onClickTeam = () => {
    teamSectionRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const toggleHamberger = () => {
    setHambergerState(!hambergerState)
  }
  return (
    <>
      <MenuDrawer
        hambergerState={hambergerState}
        setHambergerState={setHambergerState}
        onClickTeam={onClickTeam}
        onClickFeatures={onClickFeatures}
      />
      {!isMobile && (
        <div className="w-full flex flex-row justify-between items-center border-b border-[#999292] px-6 absolute z-30">
          <LogoComponent />
          <div className="flex flex-row items-center justify-center gap-x-11">
            <a
              href="https://discord.gg/CwKq8Q8UcT"
              target={'_blank'}
              rel="noreferrer"
            >
              <div className="text-xl hover:text-p-h hover:border-b-4 hover:border-p-h hover:mb-[-4px] py-6">
                Community
              </div>
            </a>
            <div
              className="text-xl hover:text-p-h hover:border-b-4 hover:border-p-h hover:mb-[-4px] py-6"
              onClick={onClickTeam}
            >
              Team
            </div>
            <div className="text-xl hover:text-p-h hover:border-b-4 hover:border-p-h hover:mb-[-4px] py-6">
              Blog
            </div>
            <div
              className="text-xl hover:text-p-h hover:border-b-4 hover:border-p-h hover:mb-[-4px] py-6"
              onClick={onClickFeatures}
            >
              Features
            </div>
            <div className="background-gradient py-2 px-9 rounded-full text-xl leading-9">
              Launch APP
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="flex flex-row items-center justify-between h-14 bg-p-bg rounded-b-[20px] p-3 absolute w-full z-30">
          <LogoComponent />
          <div>
            <section className="flex">
              <button onClick={toggleHamberger}>
                <GrMenu className="w-6 h-6" />
              </button>
            </section>
          </div>
        </div>
      )}
    </>
  )
}

NewNavBar.propTypes = {
  featureSectionRef: PropTypes.object.isRequired,
  teamSectionRef: PropTypes.object.isRequired
}

export default NewNavBar
