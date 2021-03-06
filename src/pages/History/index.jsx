import React from 'react'
import Lottie from 'react-lottie'
import { motion } from 'framer-motion'

import {
  Navbar,
  Footer,
  Sidebar,
  MobileNav,
  HorizontalCard,
} from '../../components'
import { useHistory, useGlobalState } from '../../context'
import { useDocumentTitle } from '../../hooks'
import animation from '../../assets/lotties/empty.json'
import { fadingParent, sliderHolder } from '../../utils'
import './styles.scss'

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: animation,
}

const History = () => {
  const { showToast } = useGlobalState()
  const { myHistory, fetchHistory, clearHistory, removeFromHistory } =
    useHistory()
  const { isLoading, history } = myHistory
  useDocumentTitle('History | Hooli Views')

  React.useEffect(() => {
    fetchHistory(showToast)
  }, [])

  return (
    <motion.div
      className="history"
      variants={fadingParent}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Navbar />
      <main className="history__container">
        <Sidebar />
        <MobileNav />
        <article className="history__content">
          <div className="history__info">
            <div className="history__imgwrapper"></div>
            <h1 className="h4">History</h1>
            <p className="text-rg">{history.length} videos</p>
            <div
              className="btn btn-transparent"
              onClick={() => clearHistory(showToast)}
            >
              Reset <i className={`fas fa-history`}></i>
            </div>
          </div>
          <>
            {isLoading ? (
              <div className="history__list">
                {[...new Array(10)].map((_, index) => (
                  <HorizontalCard
                    key={index}
                    video={{ title: '', category: '' }}
                  />
                ))}
              </div>
            ) : (
              <motion.div
                className="history__list"
                variants={sliderHolder}
                initial="hidden"
                animate="show"
                exit="exit"
                layout
              >
                {history.length > 0 ? (
                  [...history]
                    .reverse()
                    .map(video => (
                      <HorizontalCard
                        video={video}
                        key={video._id}
                        shouldDelete={true}
                        onDelete={() => removeFromHistory(video._id, showToast)}
                      />
                    ))
                ) : (
                  <div className="history__empty">
                    <Lottie options={defaultOptions} height="30rem" speed={1} />
                    <p className="text-rg">Nothing to see here :P</p>
                  </div>
                )}
              </motion.div>
            )}
          </>
        </article>
      </main>
      <Footer />
    </motion.div>
  )
}

export { History }
