import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Users } from 'lucide-react';

const stats = [
  { id: 1, name: 'Transactions every 24 hours', value: '44 million', icon: <TrendingUp className="h-8 w-8 text-primary" /> },
  { id: 2, name: 'Assets under holding', value: '$119 trillion', icon: <DollarSign className="h-8 w-8 text-secondary" /> },
  { id: 3, name: 'New users annually', value: '46,000', icon: <Users className="h-8 w-8 text-accent" /> },
];

export default function Stats() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mx-auto flex max-w-xs flex-col items-center gap-y-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-2">{stat.icon}</div>
              <dt className="text-lg font-medium text-gray-700">{stat.name}</dt>
              <dd className="order-first text-5xl font-extrabold tracking-tight text-black">
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  );
}
