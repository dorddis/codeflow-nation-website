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
    <div className="min-h-screen bg-dark-900 text-slate-200">
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent-primary rounded-full opacity-30"
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

      <div className="container text-center relative z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Stop Losing Bids to{' '}
          <span className="gradient-text">Slower Competitors</span>
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl mb-8 text-slate-300 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We build custom AI pipelines that turn your RFQ chaos into cash flow.
          Get accurate proposals to your clients in minutes, not days.
        </motion.h2>

        <motion.p
          className="text-lg mb-12 text-slate-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Custom automation for CNC machining and HVAC companies that actually works with your existing tools
        </motion.p>

        <motion.button
          className="btn-primary text-xl inline-flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}
        >
          Book Your Free Pipeline Audit
          <ArrowRight className="w-6 h-6" />
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
    <section className="py-16 bg-dark-800 border-y border-slate-700">
      <div className="container">
        <p className="text-center text-slate-400 mb-8 text-lg">
          Powered by World-Class Technology
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {techs.map((tech, index) => (
            <motion.div
              key={tech}
              className="text-slate-300 font-semibold text-lg bg-dark-700 px-6 py-3 rounded-lg"
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-8 gradient-text"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Does Your Quoting Process Feel Stuck in the Stone Age?
            </motion.h2>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-lg text-slate-300">{problem}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="card-dark">
              <div className="text-center">
                <Clock className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Your Current Reality</h3>
                <p className="text-slate-400">
                  3+ hours per quote, 20% win rate, endless manual work
                </p>
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
    <section className="section-padding bg-dark-800">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Introducing the <span className="gradient-text">AI-Powered RFQ Pipeline</span>
          </motion.h2>

          <motion.p
            className="text-xl text-slate-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We connect your existing tools to create a seamless, intelligent system that works 24/7.
            It's not new software to learn; it's a supercharger for the workflow you already have.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="card-dark"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-red-400">BEFORE: Chaos</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {['Email', 'Human', 'CAD', 'Spreadsheet', 'Human', 'Proposal'].map((step, i) => (
                <div key={i} className="bg-red-900/30 text-red-300 px-3 py-1 rounded text-sm">
                  {step}
                </div>
              ))}
            </div>
            <p className="text-slate-400">Disconnected tools, manual handoffs, hours of work</p>
          </motion.div>

          <motion.div
            className="card-dark"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-green-400">AFTER: Codeflow Nation AI</h3>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-green-900/30 text-green-300 px-3 py-1 rounded text-sm">RFQ Email</div>
              <ArrowRight className="w-4 h-4 text-accent-primary" />
              <div className="bg-accent-primary/20 text-accent-primary px-3 py-1 rounded text-sm">AI Pipeline</div>
              <ArrowRight className="w-4 h-4 text-accent-primary" />
              <div className="bg-green-900/30 text-green-300 px-3 py-1 rounded text-sm">Professional Proposal</div>
            </div>
            <p className="text-slate-400">One seamless flow, 90% time reduction, higher win rates</p>
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
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Your Path to Automated Proposals in{' '}
          <span className="gradient-text">3 Simple Steps</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-8">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-accent-primary to-accent-secondary rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-primary text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-300 text-lg">{step.description}</p>
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
    <section id="calculator" className="section-padding bg-dark-800">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Discover the <span className="gradient-text">Real Cost of Your Delay</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Your quoting process isn't just slow—it's expensive. Use our free calculator to see exactly
            how much money and time you're losing every month.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            className="card-dark"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Calculator className="w-8 h-8 text-accent-primary" />
              <h3 className="text-2xl font-bold">Quote Speed & Efficiency Calculator</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  How many quotes do you send per month?
                </label>
                <input
                  type="number"
                  className="w-full p-3 bg-dark-700 border border-slate-600 rounded-lg focus:border-accent-primary focus:outline-none"
                  placeholder="e.g., 50"
                  value={formData.quotesPerMonth}
                  onChange={(e) => handleInputChange('quotesPerMonth', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Average hours to create one quote?
                </label>
                <input
                  type="number"
                  step="0.1"
                  className="w-full p-3 bg-dark-700 border border-slate-600 rounded-lg focus:border-accent-primary focus:outline-none"
                  placeholder="e.g., 3"
                  value={formData.hoursPerQuote}
                  onChange={(e) => handleInputChange('hoursPerQuote', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Hourly cost for quote creation? ($)
                </label>
                <input
                  type="number"
                  className="w-full p-3 bg-dark-700 border border-slate-600 rounded-lg focus:border-accent-primary focus:outline-none"
                  placeholder="e.g., 60"
                  value={formData.hourlyCost}
                  onChange={(e) => handleInputChange('hourlyCost', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Current quote-to-win rate? (%)
                </label>
                <input
                  type="number"
                  className="w-full p-3 bg-dark-700 border border-slate-600 rounded-lg focus:border-accent-primary focus:outline-none"
                  placeholder="e.g., 20"
                  value={formData.winRate}
                  onChange={(e) => handleInputChange('winRate', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Average job value? ($)
                </label>
                <input
                  type="number"
                  className="w-full p-3 bg-dark-700 border border-slate-600 rounded-lg focus:border-accent-primary focus:outline-none"
                  placeholder="e.g., 5000"
                  value={formData.avgJobValue}
                  onChange={(e) => handleInputChange('avgJobValue', e.target.value)}
                />
              </div>

              <button
                className="btn-primary w-full text-lg"
                onClick={calculateSavings}
              >
                Calculate My Savings
              </button>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card-dark">
              <h3 className="text-2xl font-bold mb-4">Don't Guess. Quantify.</h3>
              <p className="text-slate-300 mb-6">
                Most business owners have no idea how much their slow quoting process
                is actually costing them. The results might shock you.
              </p>
              <div className="flex items-center gap-3 text-accent-primary">
                <CheckCircle className="w-5 h-5" />
                <span>See your exact time and cost waste</span>
              </div>
              <div className="flex items-center gap-3 text-accent-primary mt-2">
                <CheckCircle className="w-5 h-5" />
                <span>Calculate potential revenue gains</span>
              </div>
              <div className="flex items-center gap-3 text-accent-primary mt-2">
                <CheckCircle className="w-5 h-5" />
                <span>Understand your competitive disadvantage</span>
              </div>
            </div>

            {results && (
              <motion.div
                className="card-dark border-accent-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-accent-primary">Your Quoting Reality Check</h3>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Monthly Time Spent:</span>
                    <span className="text-red-400 font-bold">{results.monthlyHours} hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Annual Labor Cost:</span>
                    <span className="text-red-400 font-bold">${results.annualLaborCost.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Current Win Rate:</span>
                    <span>{results.winRate}% ({results.wonJobs.toFixed(1)} jobs/month)</span>
                  </div>

                  <div className="border-t border-slate-600 pt-4 mt-6">
                    <div className="flex justify-between mb-2">
                      <span>Potential Annual Time Savings:</span>
                      <span className="text-green-400 font-bold">{results.timeSavings.toFixed(0)} hours</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Potential Cost Savings:</span>
                      <span className="text-green-400 font-bold">${results.costSavings.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between mb-4">
                      <span>Additional Revenue (10% win rate boost):</span>
                      <span className="text-green-400 font-bold">${results.additionalRevenue.toLocaleString()}</span>
                    </div>

                    <div className="bg-green-900/20 p-4 rounded-lg text-center">
                      <p className="text-lg font-bold">
                        Total Annual Impact: <span className="text-green-400 text-2xl">
                          ${Math.round(results.totalImpact / 1000)}K+
                        </span>
                      </p>
                      <p className="text-sm text-slate-400 mt-2">in savings and additional revenue</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <p className="mb-4 font-semibold">Ready to see how our AI can make this a reality?</p>
                  <button className="btn-secondary inline-flex items-center gap-2">
                    Book Your Free Pipeline Audit
                    <ArrowRight className="w-5 h-5" />
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">
              Built by a <span className="gradient-text">Developer</span>, for Your Business
            </h2>
            <div className="text-lg text-slate-300 space-y-4">
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
            <div className="mt-8">
              <button className="btn-primary inline-flex items-center gap-2">
                Let's Talk About Your Pipeline
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 text-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-64 h-64 mx-auto bg-gradient-to-br from-accent-primary to-accent-secondary rounded-full flex items-center justify-center mb-8">
              <div className="w-60 h-60 bg-dark-800 rounded-full flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
            <h3 className="text-2xl font-bold">Siddharth</h3>
            <p className="text-accent-primary font-semibold">Founder & Lead Developer</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Final CTA Section
function FinalCTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-accent-primary to-accent-secondary">
      <div className="container text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready to Turn Your Quotes into a Competitive Advantage?
        </motion.h2>

        <motion.p
          className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto"
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
          className="bg-white text-accent-primary hover:bg-slate-100 font-bold py-6 px-12 rounded-xl text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Book My Free Pipeline Audit Now
          <ArrowRight className="w-6 h-6" />
        </motion.button>

        <p className="mt-6 text-blue-100 text-sm">
          No obligation. No sales pressure. Just actionable insights.
        </p>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="py-16 bg-dark-800 border-t border-slate-700">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Codeflow Nation</h3>
            <p className="text-slate-400">© 2025 Codeflow Nation. All rights reserved.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                className="block text-slate-400 hover:text-accent-primary transition-colors"
                onClick={() => document.getElementById('calculator').scrollIntoView({ behavior: 'smooth' })}
              >
                Calculator
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <a
                href="mailto:siddharth@codeflownation.com"
                className="flex items-center justify-center md:justify-start gap-2 text-slate-400 hover:text-accent-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                siddharth@codeflownation.com
              </a>
              <a
                href="https://linkedin.com/in/siddharth"
                className="flex items-center justify-center md:justify-start gap-2 text-slate-400 hover:text-accent-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
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
