'use client'

import Modal from '@/shared/components/ui/Modal'

interface PricingModalProps {
  open: boolean
  onClose: () => void
}

export default function PricingModal({ open, onClose }: PricingModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      size="md"
      title="PARQUEADERO 24/7 - PRIMERA HORA: $6.000"
    >
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="px-4 py-3 font-semibold">Tiempo</th>
              <th className="px-4 py-3 font-semibold">Precio</th>
              <th className="px-4 py-3 font-semibold">¡OFERTA!</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr>
              <td className="px-4 py-3">1 Hora</td>
              <td className="px-4 py-3 font-semibold">$6.000</td>
             
            </tr>
            <tr>
              <td className="px-4 py-3">2 Horas</td>
              <td className="px-4 py-3 font-semibold">$11.000</td>
              <td className="px-4 py-3 text-green-700 font-semibold">¡Ahorra $1.000!</td>
            </tr>
            <tr className="bg-primary-50">
              <td className="px-4 py-3 font-semibold">3 HORAS</td>
              <td className="px-4 py-3 font-extrabold text-primary-700">$14.000</td>
              <td className="px-4 py-3 text-primary-700 font-bold">¡MEJOR PRECIO!</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Día Completo (24H)</td>
              <td className="px-4 py-3 font-semibold">$56.000</td>
              <td className="px-4 py-3 text-green-700 font-semibold">¡SUPER OFERTA!</td>
            </tr>
            <tr>
              <td className="px-4 py-3" colSpan={3}>
                <div className="text-sm text-gray-700">
                  <span className="font-semibold">Hora Adicional (después de 3h):</span> $2.000
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Modal>
  )
}


