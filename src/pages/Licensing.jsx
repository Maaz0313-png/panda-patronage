import React from "react";

const Licensing = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12 text-gray-900">
      <h1 className="mb-2 text-4xl font-bold">Licensing</h1>
      <p className="mb-10 text-gray-500">September 27, 2023</p>
      <h2 className="mb-6 text-2xl font-semibold">
        Software Licensing Agreement
      </h2>
      <p className="mb-8 text-base">
        This Software Licensing Agreement ("Agreement") is entered into between
        [Your Company Name], hereinafter referred to as the "Licensor," and the
        individual or entity that accepts the terms of this Agreement,
        hereinafter referred to as the "Licensee."
      </p>
      <h3 className="mb-2 text-lg font-semibold">License Grant</h3>
      <p className="mb-8 text-base">
        Subject to the terms and conditions of this Agreement, Licensor grants
        Licensee a non-exclusive, non-transferable, and revocable license to use
        the software ("Software") provided by Licensor. This license allows
        Licensee to install and use the Software on a single computer or device.
      </p>
      <h3 className="mb-2 text-lg font-semibold">License Restrictions</h3>
      <ol className="mb-8 list-inside list-decimal space-y-1 text-base">
        <li>
          Licensee may not sublicense, sell, assign, or otherwise transfer the
          Software to any third party.
        </li>
        <li>
          Licensee may not modify, reverse engineer, decompile, or disassemble
          the Software.
        </li>
        <li>
          Licensee may not distribute, share, or make the Software available
          over a network, either in part or in its entirety.
        </li>
      </ol>
      <h3 className="mb-2 text-lg font-semibold">Intellectual Property</h3>
      <p className="mb-8 text-base">
        The Software is the intellectual property of Licensor and is protected
        by copyright and other intellectual property laws. Licensee acknowledges
        that this Agreement does not grant Licensee any ownership or rights to
        the Software.
      </p>
      <h3 className="mb-2 text-lg font-semibold">Termination</h3>
      <p className="mb-8 text-base">
        Licensor reserves the right to terminate this Agreement at any time if
        Licensee fails to comply with its terms. Upon termination, Licensee must
        cease using the Software and destroy all copies.
      </p>
      <h3 className="mb-2 text-lg font-semibold">Warranty Disclaimer</h3>
      <p className="mb-8 text-base">
        The Software is provided "as is" and without warranties. Licensor
        disclaims any and all warranties, including but not limited to, the
        implied warranties of merchantability and fitness for a particular
        purpose.
      </p>
      <h3 className="mb-2 text-lg font-semibold">Limitation of Liability</h3>
      <p className="mb-8 text-base">
        Licensor shall not be liable for any damages, including but not limited
        to, direct, indirect, special, or consequential damages arising out of
        the use or inability to use the Software.
      </p>
      <h3 className="mb-2 text-lg font-semibold">Entire Agreement</h3>
      <p className="mb-8 text-base">
        This Agreement constitutes the entire understanding between the parties
        and supersedes all previous agreements, understandings, and
        representations.
      </p>
      <p className="mt-10 text-base">
        By accepting the terms of this Agreement, Licensee acknowledges that
        they have read, understood, and agree to be bound by its terms.
      </p>
    </div>
  );
};

export default Licensing;
