import { Link } from "react-router";
import { Package, Truck, MapPin, Clock, CheckCircle, AlertCircle, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button";

export function CardTracking() {
  // Mock tracking data
  const trackingStatus = {
    orderNumber: "TFG-2026-04829",
    status: "in_transit",
    estimatedDelivery: "Apr 8, 2026",
    cardDesign: "Pink Gradient",
    shippingMethod: "Standard Shipping",
    trackingNumber: "1Z999AA10123456784"
  };

  const trackingHistory = [
    {
      id: 1,
      status: "Order Placed",
      description: "Your TicketFanGrub card order has been confirmed",
      location: "Online",
      date: "Mar 31, 2026",
      time: "2:45 PM",
      completed: true
    },
    {
      id: 2,
      status: "Processing",
      description: "Card is being personalized with your custom design",
      location: "TicketFanGrub Facility, CA",
      date: "Apr 1, 2026",
      time: "10:30 AM",
      completed: true
    },
    {
      id: 3,
      status: "Shipped",
      description: "Your card has been shipped via USPS",
      location: "Los Angeles, CA",
      date: "Apr 2, 2026",
      time: "8:15 AM",
      completed: true
    },
    {
      id: 4,
      status: "In Transit",
      description: "Package is on the way to your delivery address",
      location: "Phoenix, AZ",
      date: "Apr 4, 2026",
      time: "3:22 PM",
      completed: true
    },
    {
      id: 5,
      status: "Out for Delivery",
      description: "Package is out for delivery today",
      location: "Your City",
      date: "Apr 8, 2026",
      time: "Expected",
      completed: false
    },
    {
      id: 6,
      status: "Delivered",
      description: "Package has been delivered",
      location: "Your Address",
      date: "Apr 8, 2026",
      time: "Expected",
      completed: false
    }
  ];

  const getStatusIcon = (status: string, completed: boolean) => {
    if (completed) {
      return <CheckCircle className="size-5 text-green-500" />;
    }
    if (status === "Out for Delivery") {
      return <Truck className="size-5 text-pink-500" />;
    }
    return <Clock className="size-5 text-gray-500" />;
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/member-dashboard" className="text-pink-500 hover:text-pink-400 text-sm mb-4 inline-flex items-center gap-1">
            ← Back to Member Dashboard
          </Link>
          <h1 className="text-white text-3xl mb-2">Track Your Card</h1>
          <p className="text-gray-400">Monitor the delivery status of your TicketFanGrub card</p>
        </div>

        {/* Order Summary Card */}
        <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 rounded-lg p-6 border border-pink-500/30 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="text-gray-400 text-sm mb-1">Order Number</div>
              <div className="text-white text-xl font-semibold">{trackingStatus.orderNumber}</div>
            </div>
            <div className="px-4 py-2 bg-pink-500/20 rounded-lg border border-pink-500/30">
              <div className="text-pink-400 text-sm font-semibold">In Transit</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-gray-400 text-sm mb-1">Card Design</div>
              <div className="text-white font-medium">{trackingStatus.cardDesign}</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm mb-1">Shipping Method</div>
              <div className="text-white font-medium">{trackingStatus.shippingMethod}</div>
            </div>
            <div>
              <div className="text-gray-400 text-sm mb-1">Estimated Delivery</div>
              <div className="text-pink-400 font-semibold">{trackingStatus.estimatedDelivery}</div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-pink-500/20">
            <div className="flex items-center justify-between">
              <div className="text-gray-400 text-sm">Tracking Number</div>
              <div className="text-white font-mono text-sm">{trackingStatus.trackingNumber}</div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e] mb-8">
          <h2 className="text-white text-xl mb-6">Delivery Progress</h2>
          
          {/* Visual Progress */}
          <div className="relative">
            <div className="absolute top-5 left-0 right-0 h-0.5 bg-[#24272e]">
              <div className="h-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-500" style={{ width: '66%' }}></div>
            </div>
            
            <div className="relative flex justify-between">
              <div className="flex flex-col items-center">
                <div className="size-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle className="size-5 text-white" />
                </div>
                <div className="text-white text-xs font-medium text-center">Ordered</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="size-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mb-2">
                  <CheckCircle className="size-5 text-white" />
                </div>
                <div className="text-white text-xs font-medium text-center">Processing</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="size-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mb-2">
                  <Truck className="size-5 text-white" />
                </div>
                <div className="text-pink-400 text-xs font-medium text-center">In Transit</div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="size-10 bg-[#24272e] rounded-full flex items-center justify-center mb-2">
                  <Package className="size-5 text-gray-500" />
                </div>
                <div className="text-gray-500 text-xs font-medium text-center">Delivered</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tracking History */}
        <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e] mb-8">
          <h2 className="text-white text-xl mb-6">Tracking History</h2>
          
          <div className="space-y-1">
            {trackingHistory.map((event, index) => (
              <div key={event.id} className="relative">
                {index !== trackingHistory.length - 1 && (
                  <div className={`absolute left-[9px] top-10 bottom-0 w-0.5 ${event.completed ? 'bg-pink-500' : 'bg-[#24272e]'}`}></div>
                )}
                
                <div className={`flex items-start gap-4 p-4 rounded-lg ${event.completed ? 'bg-[#0a0b0e]' : 'bg-transparent'} transition-all`}>
                  <div className="flex-shrink-0 mt-1">
                    {getStatusIcon(event.status, event.completed)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <div className={`font-medium ${event.completed ? 'text-white' : 'text-gray-500'}`}>
                        {event.status}
                      </div>
                      <div className={`text-xs ${event.completed ? 'text-gray-400' : 'text-gray-600'} flex-shrink-0 ml-4`}>
                        {event.date} • {event.time}
                      </div>
                    </div>
                    <div className={`text-sm mb-1 ${event.completed ? 'text-gray-400' : 'text-gray-600'}`}>
                      {event.description}
                    </div>
                    <div className={`text-xs flex items-center gap-1 ${event.completed ? 'text-gray-500' : 'text-gray-600'}`}>
                      <MapPin className="size-3" />
                      {event.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e]">
            <div className="flex items-start gap-3">
              <Package className="size-6 text-pink-500 flex-shrink-0" />
              <div>
                <div className="text-white font-medium mb-2">Card Not Arrived?</div>
                <div className="text-gray-400 text-sm mb-4">
                  If your card hasn't arrived by the estimated delivery date, contact our support team for assistance.
                </div>
                <Button className="bg-[#24272e] hover:bg-[#2a2e36] text-white px-4 py-2 rounded-lg text-sm">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-[#1a1d23] rounded-lg p-6 border border-[#24272e]">
            <div className="flex items-start gap-3">
              <AlertCircle className="size-6 text-blue-500 flex-shrink-0" />
              <div>
                <div className="text-white font-medium mb-2">Activate Your Card</div>
                <div className="text-gray-400 text-sm mb-4">
                  Once your card arrives, you'll need to activate it before loading tickets. We'll send instructions via email.
                </div>
                <Link to="/order-card">
                  <Button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
                    Learn More
                    <ChevronRight className="size-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}