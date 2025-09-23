import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Zap,
  Target,
  Mail,
  Linkedin,
  Calculator
} from 'lucide-react'

function App() {
  return (
    <div className="app">
      <HeroSection />
      <TechSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <CalculatorSection />
      <FounderSection />
      <FinalCTASection />
      <Footer />
    </div>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>

      {/* Animated Background Elements */}
      <div className="hero-particles">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`
            }}
          />
        ))}
      </div>

      <div className="container hero-content">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Stop Losing Bids to{' '}
          <span className="gradient-text">Slower Competitors</span>
        </motion.h1>

        <motion.h2
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We build custom AI pipelines that turn your RFQ chaos into cash flow.
          Get accurate proposals to your clients in minutes, not days.
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Custom automation for CNC machining and HVAC companies that actually works with your existing tools
        </motion.p>

        <motion.button
          className="btn-primary hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Book Your Free Pipeline Audit
          <ArrowRight className="icon" />
        </motion.button>
      </div>
    </section>
  )
}

// Tech Section
function TechSection() {
  const techs = [
    'OpenAI', 'Google Cloud', 'AWS', 'Twilio', 'PandaDoc', 'Make.com'
  ]

  return (
    <section className="tech-section">
      <div className="container">
        <p className="tech-title">
          Powered by World-Class Technology
        </p>
        <div className="tech-grid">
          {techs.map((tech, index) => (
            <motion.div
              key={tech}
              className="tech-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Problem Section
function ProblemSection() {
  const problems = [
    'Manually reading every RFQ email and attachment',
    'Spending hours opening CAD files and calculating material costs',
    'Losing track of follow-ups and letting hot leads go cold',
    'Watching your competitors win bids because they responded faster'
  ]

  return (
    <section className="section-padding">
      <div className="container">
        <div className="two-column">
          <div>
            <motion.h2
              className="section-title gradient-text"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Does Your Quoting Process Feel Stuck in the Stone Age?
            </motion.h2>

            <div className="problem-list">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="problem-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="problem-icon" />
                  <p>{problem}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="problem-visual">
            <div className="card-dark">
              <div className="text-center">
                <Clock className="clock-icon" />
                <h3>Your Current Reality</h3>
                <p>3+ hours per quote, 20% win rate, endless manual work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Solution Section
function SolutionSection() {
  return (
    <section className="section-padding solution-bg">
      <div className="container">
        <div className="text-center section-header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Introducing the <span className="gradient-text">AI-Powered RFQ Pipeline</span>
          </motion.h2>

          <motion.p
            className="section-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We connect your existing tools to create a seamless, intelligent system that works 24/7.
            It's not new software to learn; it's a supercharger for the workflow you already have.
          </motion.p>
        </div>

        <div className="two-column">
          <motion.div
            className="card-dark before-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="before-title">BEFORE: Chaos</h3>
            <div className="process-flow">
              {['Email', 'Human', 'CAD', 'Spreadsheet', 'Human', 'Proposal'].map((step, i) => (
                <div key={i} className="process-step before-step">
                  {step}
                </div>
              ))}
            </div>
            <p>Disconnected tools, manual handoffs, hours of work</p>
          </motion.div>

          <motion.div
            className="card-dark after-card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="after-title">AFTER: Codeflow Nation AI</h3>
            <div className="process-flow-after">
              <div className="process-step after-step">RFQ Email</div>
              <ArrowRight className="flow-arrow" />
              <div className="process-step ai-step">AI Pipeline</div>
              <ArrowRight className="flow-arrow" />
              <div className="process-step after-step">Professional Proposal</div>
            </div>
            <p>One seamless flow, 90% time reduction, higher win rates</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// How It Works Section
function HowItWorksSection() {
  const steps = [
    {
      icon: Target,
      title: 'Book Your Free Audit',
      description: "We'll map your current process and identify your single biggest bottleneck."
    },
    {
      icon: Zap,
      title: 'We Build Your Custom Pipeline',
      description: 'Our team builds and integrates your custom AI engine within 14 days.'
    },
    {
      icon: DollarSign,
      title: 'Win More Bids',
      description: 'Go live and start sending faster, more professional proposals that crush the competition.'
    }
  ]

  return (
    <section className="section-padding">
      <div className="container">
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Your Path to Automated Proposals in{' '}
          <span className="gradient-text">3 Simple Steps</span>
        </motion.h2>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="step-icon-container">
                <div className="step-icon-bg">
                  <step.icon className="step-icon" />
                </div>
                <div className="step-number">
                  {index + 1}
                </div>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Calculator Section
function CalculatorSection() {
  const [formData, setFormData] = useState({
    quotesPerMonth: '',
    hoursPerQuote: '',
    hourlyCost: '',
    winRate: '',
    avgJobValue: ''
  })
  const [results, setResults] = useState(null)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const calculateSavings = () => {
    const { quotesPerMonth, hoursPerQuote, hourlyCost, winRate, avgJobValue } = formData

    if (!quotesPerMonth || !hoursPerQuote || !hourlyCost || !winRate || !avgJobValue) {
      alert('Please fill in all fields to see your results.')
      return
    }

    const monthlyHours = quotesPerMonth * hoursPerQuote
    const monthlyLaborCost = monthlyHours * hourlyCost
    const annualLaborCost = monthlyLaborCost * 12
    const wonJobs = quotesPerMonth * (winRate / 100)
    const monthlyRevenue = wonJobs * avgJobValue
    const annualRevenue = monthlyRevenue * 12

    const improvedWinRate = Math.min(winRate + 10, 90)
    const potentialWonJobs = quotesPerMonth * (improvedWinRate / 100)
    const additionalRevenue = (potentialWonJobs - wonJobs) * avgJobValue * 12

    const timeSavings = monthlyHours * 0.9
    const costSavings = timeSavings * hourlyCost * 12

    setResults({
      monthlyHours,
      monthlyLaborCost,
      annualLaborCost,
      winRate,
      wonJobs,
      annualRevenue,
      timeSavings: timeSavings * 12,
      costSavings,
      additionalRevenue,
      totalImpact: costSavings + additionalRevenue
    })
  }

  return (
    <section id="calculator" className="section-padding calculator-bg">
      <div className="container">
        <motion.div
          className="text-center section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">
            Discover the <span className="gradient-text">Real Cost of Your Delay</span>
          </h2>
          <p className="section-description">
            Your quoting process isn't just slow—it's expensive. Use our free calculator to see exactly
            how much money and time you're losing every month.
          </p>
        </motion.div>

        <div className="calculator-grid">
          <motion.div
            className="card-dark calculator-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="calculator-header">
              <Calculator className="calculator-icon" />
              <h3>Quote Speed & Efficiency Calculator</h3>
            </div>

            <div className="form-group">
              <div className="input-group">
                <label>How many quotes do you send per month?</label>
                <input
                  type="number"
                  className="form-input"
                  placeholder="e.g., 50"
                  value={formData.quotesPerMonth}
                  onChange={(e) => handleInputChange('quotesPerMonth', e.target.value)}
                />
              </div>

              <div className="input-group">
                <label>Average hours to create one quote?</label>
                <input
                  type="number"
                  step="0.1"
                  className="form-input"
                  placeholder="e.g., 3"
                  value={formData.hoursPerQuote}
                  onChange={(e) => handleInputChange('hoursPerQuote', e.target.value)}
                />
              </div>

              <div className="input-group">
                <label>Hourly cost for quote creation? ($)</label>
                <input
                  type="number"
                  className="form-input"
                  placeholder="e.g., 60"
                  value={formData.hourlyCost}
                  onChange={(e) => handleInputChange('hourlyCost', e.target.value)}
                />
              </div>

              <div className="input-group">
                <label>Current quote-to-win rate? (%)</label>
                <input
                  type="number"
                  className="form-input"
                  placeholder="e.g., 20"
                  value={formData.winRate}
                  onChange={(e) => handleInputChange('winRate', e.target.value)}
                />
              </div>

              <div className="input-group">
                <label>Average job value? ($)</label>
                <input
                  type="number"
                  className="form-input"
                  placeholder="e.g., 5000"
                  value={formData.avgJobValue}
                  onChange={(e) => handleInputChange('avgJobValue', e.target.value)}
                />
              </div>

              <button
                className="btn-primary calculate-btn"
                onClick={calculateSavings}
              >
                Calculate My Savings
              </button>
            </div>
          </motion.div>

          <motion.div
            className="calculator-right"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card-dark">
              <h3>Don't Guess. Quantify.</h3>
              <p>
                Most business owners have no idea how much their slow quoting process
                is actually costing them. The results might shock you.
              </p>
              <div className="benefit-list">
                <div className="benefit-item">
                  <CheckCircle className="benefit-icon" />
                  <span>See your exact time and cost waste</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle className="benefit-icon" />
                  <span>Calculate potential revenue gains</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle className="benefit-icon" />
                  <span>Understand your competitive disadvantage</span>
                </div>
              </div>
            </div>

            {results && (
              <motion.div
                className="card-dark results-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="results-title">Your Quoting Reality Check</h3>

                <div className="results-grid">
                  <div className="result-row">
                    <span>Monthly Time Spent:</span>
                    <span className="result-bad">{results.monthlyHours} hours</span>
                  </div>
                  <div className="result-row">
                    <span>Annual Labor Cost:</span>
                    <span className="result-bad">${results.annualLaborCost.toLocaleString()}</span>
                  </div>
                  <div className="result-row">
                    <span>Current Win Rate:</span>
                    <span>{results.winRate}% ({results.wonJobs.toFixed(1)} jobs/month)</span>
                  </div>

                  <div className="results-divider"></div>

                  <div className="result-row">
                    <span>Potential Annual Time Savings:</span>
                    <span className="result-good">{results.timeSavings.toFixed(0)} hours</span>
                  </div>
                  <div className="result-row">
                    <span>Potential Cost Savings:</span>
                    <span className="result-good">${results.costSavings.toLocaleString()}</span>
                  </div>
                  <div className="result-row">
                    <span>Additional Revenue (10% win rate boost):</span>
                    <span className="result-good">${results.additionalRevenue.toLocaleString()}</span>
                  </div>

                  <div className="total-impact">
                    <p>
                      Total Annual Impact: <span className="impact-amount">
                        ${Math.round(results.totalImpact / 1000)}K+
                      </span>
                    </p>
                    <p className="impact-subtitle">in savings and additional revenue</p>
                  </div>
                </div>

                <div className="results-cta">
                  <p>Ready to see how our AI can make this a reality?</p>
                  <button className="btn-secondary">
                    Book Your Free Pipeline Audit
                    <ArrowRight className="icon" />
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Founder Section
function FounderSection() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="founder-grid">
          <motion.div
            className="founder-content"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              Built by a <span className="gradient-text">Developer</span>, for Your Business
            </h2>
            <div className="founder-text">
              <p>
                My name is <strong>Siddharth</strong>. I'm a developer who is obsessed with efficiency.
                I started Codeflow Nation because I saw too many brilliant industrial businesses
                bogged down by manual, repetitive tasks.
              </p>
              <p>
                My mission is to give you the same automated firepower as a billion-dollar corporation,
                so you can focus on what you do best: <strong>building great things</strong>.
              </p>
              <p>
                I don't sell generic software or cookie-cutter solutions. Every pipeline I build is
                custom-engineered for your specific workflow, tools, and business needs.
              </p>
            </div>
            <div className="founder-cta">
              <button className="btn-primary">
                Let's Talk About Your Pipeline
                <ArrowRight className="icon" />
              </button>
            </div>
          </motion.div>

          <motion.div
            className="founder-image"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="founder-avatar">
              <div className="avatar-inner">
                <div className="emoji">👨‍💻</div>
              </div>
            </div>
            <h3>Siddharth</h3>
            <p className="founder-role">Founder & Lead Developer</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Final CTA Section
function FinalCTASection() {
  return (
    <section className="final-cta">
      <div className="container text-center">
        <motion.h2
          className="cta-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready to Turn Your Quotes into a Competitive Advantage?
        </motion.h2>

        <motion.p
          className="cta-description"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Book a complimentary, no-obligation Pipeline Audit today. In 20 minutes, you'll get a
          crystal-clear understanding of your process and actionable steps you can take to improve it—whether
          you choose to work with us or not.
        </motion.p>

        <motion.button
          className="btn-cta-final"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Book My Free Pipeline Audit Now
          <ArrowRight className="icon" />
        </motion.button>

        <p className="cta-note">
          No obligation. No sales pressure. Just actionable insights.
        </p>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-logo">Codeflow Nation</h3>
            <p className="footer-copyright">© 2025 Codeflow Nation. All rights reserved.</p>
          </div>

          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              <button
                className="footer-link"
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Calculator
              </button>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-links">
              <a href="mailto:siddharth@codeflownation.com" className="footer-contact">
                <Mail className="icon" />
                siddharth@codeflownation.com
              </a>
              <a href="https://linkedin.com/in/siddharth" className="footer-contact">
                <Linkedin className="icon" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default App